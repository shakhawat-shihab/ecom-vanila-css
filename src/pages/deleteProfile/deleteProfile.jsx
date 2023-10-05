import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useLocation, useNavigate, useOutletContext } from "react-router-dom";
import "./deleteProfile.style.scss";

const DeleteProfile = () => {
  const [user, deleteUser] = useOutletContext();
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  if (pathname == "/profile/delete") console.log("The state data ", location);

  const {
    handleSubmit,
    control,
    watch,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  useEffect(() => {
    setValue("email", user?.email);
  }, [user]);

  const handleDelete = (data) => {
    deleteUser(getValues("email"));
    alert("Are you sure to delete your account?");
    navigate("/home");
  };

  return (
    <div className="profile-edit-container">
      <form onSubmit={handleSubmit(handleDelete)} className="delete-form">
        <h2>Delete Profile</h2>

        <div>
          <label htmlFor="email">Email:</label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "email must be provided",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: "Invalid email",
              },
            }}
            render={({ field }) => (
              <input
                placeholder="Enter Email"
                {...field}
                type="text"
                style={{
                  border: errors?.email ? "1px solid red" : "",
                }}
              />
            )}
          />
          <span
            className={`${
              errors?.email?.message ? "error-message-visible" : "error-message"
            }`}
          >
            {" "}
            *{errors?.email?.message}{" "}
          </span>
        </div>

        <div>
          <input type="submit" value="Delete Account" />
        </div>
      </form>
    </div>
  );
};

export default DeleteProfile;
