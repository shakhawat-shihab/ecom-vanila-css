import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import "./PasswordInput.style.scss";

const PasswordInput = ({ field, hints, error }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div
      className="password-input"
      style={{
        border: error ? "1px solid red" : "",
      }}
    >
      <input
        placeholder={hints}
        {...field}
        type={`${visible ? "text" : "password"}`}
      />
      {!visible ? (
        <AiFillEyeInvisible
          className="eye-icon"
          onClick={() => setVisible(!visible)}
        />
      ) : (
        <AiFillEye className="eye-icon" onClick={() => setVisible(!visible)} />
      )}
    </div>
  );
};

export default PasswordInput;
