import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./login.css";
import { FaRegEyeSlash } from "react-icons/fa6";
import { LiaEyeSolid } from "react-icons/lia";
import { Link } from "react-router-dom";


const schema = z
  .object({
    // email: z.string().email(),
    u_nameEmail: z.string().min(1, { message: "field is required" }),
    userName: z.string().min(1, { message: "field is required" }),
    password: z
      .string()
      .min(1, { message: "password field is required" })
    });

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    await new Promise((resolve, reject) => {});
    console.log(data);
  };

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }
  return (
    <div className="main-box">
      <div className="form-box">
        <h1>Tracker</h1>
        <h3>Welcome Back</h3>
        <p> Please sign into your account</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              name="email"
              {...register("email")}
              id="u_name"
              type="text"
              placeholder="username/email"
              className="input-check"
            />
          </div>
          <div className="login-input">
            <input name="password" 
              {...register("password")}
              id="password" 
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="password" 
              className="input-check"
            />
            <button type="button" onClick={handlePasswordVisibility}>
              {isPasswordVisible ? <LiaEyeSolid className="pass-icon"/> : <FaRegEyeSlash className="pass-icon" />}
              </button>
            <div className="forget">
              <div>
                <input 
                  type="checkbox" 
                  id="remember" 
                  name="remember"
                  className="checkbox"
                  />
                <label htmlFor="remember">Remember Me</label>
              </div>
                <Link to="/forgetPassword">Forget Password?</Link>
            </div>
            <button className="btn-sec" type="submit">Sign In</button>
          </div>
          <div className="details">
            <p>
              Don't have an account? <span>Sign Up.</span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
