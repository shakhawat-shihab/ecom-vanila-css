import React, { useEffect } from "react";
import "./editProfile.style.scss";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";

const EditProfile = () => {
  const [user, updateUser] = useOutletContext();

  const navigate = useNavigate();

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
      userName: "",
      phone: "",
    },
  });

  useEffect(() => {
    setValue("userName", user?.userName);
    setValue("email", user?.email);
    setValue("phone", user?.phone);
  }, [user]);

  const handleRegister = (data) => {
    console.log(data);
    const obj = {
      userName: getValues("userName"),
      email: getValues("email"),
      phone: getValues("phone"),
    };
    updateUser(obj);
    navigate("/profile");
  };

  return (
    <div className="profile-edit-container">
      <form onSubmit={handleSubmit(handleRegister)} className="register-form">
        <h2>Update Profile</h2>
        <div>
          <label htmlFor="userName">User Name:</label>
          <Controller
            name="userName"
            control={control}
            rules={{
              required: "User name must be provided",
            }}
            render={({ field }) => (
              <input
                placeholder="Enter user Name"
                {...field}
                type="text"
                style={{
                  border: errors?.userName ? "1px solid red" : "",
                }}
              />
            )}
          />
          <span
            className={`${
              errors?.userName?.message
                ? "error-message-visible"
                : "error-message"
            }`}
          >
            {" "}
            *{errors?.userName?.message}{" "}
          </span>
        </div>

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
          <label htmlFor="phone">Phone:</label>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: "Phone no be provided",
            }}
            render={({ field }) => (
              <input
                placeholder="Enter Phone"
                {...field}
                type="text"
                style={{
                  border: errors?.phone ? "1px solid red" : "",
                }}
              />
            )}
          />
          <span
            className={`${
              errors?.phone?.message ? "error-message-visible" : "error-message"
            }`}
          >
            {" "}
            *{errors?.phone?.message}{" "}
          </span>
        </div>

        <div>
          <input type="submit" value="Update" />
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
