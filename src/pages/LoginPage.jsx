import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // await fetch endpoint login kemudian kirim data payload sebagai body
    localStorage.setItem("access_token", "access token dari endpoint login");
    navigate("/");
  };

  return (
    <div className="login_container">
      <div className="login_modal">
        <h2 id="login_title">LOGIN</h2>
        <hr id="login_underline" />
        <form id="login_form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input_container">
            <input
              className="form_input"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <p className="error_message">Email is required!</p>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <p className="error_message">Email is invalid!</p>
            )}
          </div>

          <div className="input_container">
            <input
              className="form_input"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="error_message">Password is required!</p>
            )}
          </div>

          <input id="login_button" type="submit" value="LOG IN" />
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
