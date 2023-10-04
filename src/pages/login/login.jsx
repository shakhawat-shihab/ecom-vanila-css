import React from "react";
import "./login.style.scss";
import { Controller, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/passwordInput/passwordInput";

const Login = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <div className="login-container">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="login-form"
        autocomplete="off"
      >
        <h2>User Login</h2>
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
        <div className="register">
          <p>
            Don't have an account? <Link to="/register">Register</Link>{" "}
          </p>
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
