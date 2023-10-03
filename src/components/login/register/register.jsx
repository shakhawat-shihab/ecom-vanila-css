import React, { useEffect, useRef } from "react";
import "./register.style.scss";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import PasswordInput from "../../passwordInput/passwordInput";

const Register = () => {
  const ref = useRef(null);

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
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      fullName: "",
    },
  });

  const handleRegister = (data) => {
    console.log(data);
  };

  useEffect(() => {
    console.log("inside");
    if (watch("firstName") && watch("lastName")) {
      console.log("dfsdfsdf");
      setValue(
        "fullName",
        watch("firstName").trim() + " " + watch("lastName").trim()
      );
    } else {
      setValue("fullName", "");
    }
  }, [watch("firstName"), watch("lastName")]);

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit(handleRegister)} className="register-form">
        <h2>User Registartion</h2>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <Controller
            name="firstName"
            control={control}
            rules={{
              required: "First name must be provided",
            }}
            render={({ field }) => (
              <input
                ref={ref}
                placeholder="Enter First Name"
                {...field}
                type="text"
                style={{
                  border: errors?.firstName ? "1px solid red" : "",
                }}
              />
            )}
          />
          <span
            className={`${
              errors?.firstName?.message
                ? "error-message-visible"
                : "error-message"
            }`}
          >
            {" "}
            *{errors?.firstName?.message}{" "}
          </span>
        </div>

        <div>
          <label htmlFor="lastName">Last Name:</label>
          <Controller
            name="lastName"
            control={control}
            rules={{
              required: "Last name must be provided",
            }}
            render={({ field }) => (
              <input
                ref={ref}
                placeholder="Enter last Name"
                {...field}
                type="text"
                style={{
                  border: errors?.lastName ? "1px solid red" : "",
                }}
              />
            )}
          />
          <span
            className={`${
              errors?.lastName?.message
                ? "error-message-visible"
                : "error-message"
            }`}
          >
            {" "}
            *{errors?.lastName?.message}{" "}
          </span>
        </div>

        <div>
          <label htmlFor="fullName">Full Name:</label>
          <Controller
            name="fullName"
            control={control}
            rules={{
              required: "Full name must be provided",
            }}
            render={({ field }) => (
              <input
                placeholder="Enter Full Name"
                {...field}
                type="text"
                disabled
                style={{
                  border: errors?.fullName ? "1px solid red" : "",
                }}
              />
            )}
          />
          <span
            className={`${
              errors?.fullName?.message
                ? "error-message-visible"
                : "error-message"
            }`}
          >
            {" "}
            *{errors?.fullName?.message}{" "}
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
          <label htmlFor="password">Password:</label>
          <Controller
            name="password"
            control={control}
            rules={{
              required: "password must be provided",
              minLength: {
                value: 8,
                message: "Minimum length must be 8",
              },
              pattern: {
                value:
                  /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/,
                message:
                  "Password must contain one special character, a capital letter, a digit ",
              },
            }}
            render={({ field }) => (
              // <input
              //   placeholder="Enter Password"
              //   {...field}
              //   type="text"
              //   style={{
              //     border: errors?.password ? "1px solid red" : "",
              //   }}
              // />
              <PasswordInput
                field={field}
                hints="Enter Password"
                error={errors.password}
              />
            )}
          />
          <span
            className={`${
              errors?.password?.message
                ? "error-message-visible"
                : "error-message"
            }`}
          >
            {" "}
            *{errors?.password?.message}{" "}
          </span>
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: "Confirm Password  must be provided",
              minLength: {
                value: 8,
                message: "Minimum length must be 8",
              },
              validate: (value) =>
                value === watch("password") ||
                "Confirm password should match given password",
            }}
            render={({ field }) => (
              // <input
              //   placeholder="Enter Confirm Password"
              //   {...field}
              //   type="text"
              //   style={{
              //     border: errors?.confirmPassword ? "1px solid red" : "",
              //   }}
              // />
              <PasswordInput
                field={field}
                hints="Enter Confirm Password"
                error={errors.confirmPassword}
              />
            )}
          />
          <span
            className={`${
              errors?.confirmPassword?.message
                ? "error-message-visible"
                : "error-message"
            }`}
          >
            {" "}
            *{errors?.confirmPassword?.message}{" "}
          </span>
        </div>

        <div className="register">
          <p>
            Already have an account? <Link to="/login">Login</Link>{" "}
          </p>
        </div>

        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default Register;
