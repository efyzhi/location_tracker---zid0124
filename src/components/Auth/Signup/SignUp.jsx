import React, { useState } from "react";
import "./signup.css";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaRegCircleUser } from "react-icons/fa6";
import { LiaEyeSolid } from "react-icons/lia";
import { MdOutlineMail } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const schema = z.object({
  email: z.string().email(),
  fullName: z.string().min(1, { message: "Field is required" }),
  userName: z.string().min(1, { message: "Field is required" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" }).max(20, { message: "Password is too long" }),
  confirmPassword: z.string().min(1, { message: "Password is required" }),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

const SignUp = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) });
  // const history = useHistory();

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://location-backend-1.onrender.com/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const responseData = await response.json();
      // console.log(responseData);
  
      if (!response.ok) {
        throw new Error("Registration failed");
      }
  
      console.log("Registration successful");
      // Redirect to dashboard after successful registration
      // history.push('/dashboard');
    } catch (error) {
      // console.error("Registration error:", error);
    }
  };
  

  return (
    <div className="formContainer">
      <div className="box">
        <h1>Tracker</h1>
        <h3>Welcome!</h3>
        <p>Kindly create your account</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-box">
            <input
              name="fullName"
              id="fullName"
              {...register("fullName")}
              type="text"
              placeholder="Full name"
              className="input"
            />
            {errors.fullName && <div className="errorMessage"> {errors.fullName?.message} </div>}
          </div>
          <div className="input-box">
            <input
              id="userName"
              {...register("userName")}
              type="text"
              placeholder="Username"
              className="input"
            />
            <FaRegCircleUser className="icons" />
            {errors.userName && <div className="errorMessage"> {errors.userName?.message} </div>}
          </div>
          <div className="input-box">
            <input
              id="email"
              {...register("email")}
              type="email"
              placeholder="Email Address"
              className="input"
            />
            <MdOutlineMail className="icons" />
            {errors.email && <div className="errorMessage"> {errors.email?.message} </div>}
          </div>
          <div className="input-box">
            <input
              id="password"
              {...register("password")}
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="Password"
              className="input"
            />
            <button type="button" onClick={handlePasswordVisibility}>
              {isPasswordVisible ? <LiaEyeSolid className="icons pass" /> : <FaRegEyeSlash className="icons pass" />}
            </button>
            {errors.password && <div className="errorMessage"> {errors.password?.message} </div>}
          </div>
          <div className="input-box">
            <input
              id="c_password"
              {...register("confirmPassword")}
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="Confirm Password"
              className="input"
            />
            <button type="button" onClick={handlePasswordVisibility}>
              {isPasswordVisible ? <LiaEyeSolid className="icons pass" /> : <FaRegEyeSlash className="icons pass" />}
            </button>
            {errors.confirmPassword && <div className="errorMessage"> {errors.confirmPassword?.message} </div>}
          </div>
          <button className="btn" disabled={isSubmitting} type="submit">
            {isSubmitting ? "Loading..." : "Sign Up"}
          </button>
        </form>
        <div className="enter">
          <p>Already have an account? <span><Link to="/login">Log in.</Link></span></p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
