import React from "react";
import './signup.css'
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";

const schema = z
  .object({
    email: z.string().email(),
    fullName: z.string().min(1, { message: "field is required" }),
    userName: z.string().min(1, { message: "field is required" }),
    password: z
      .string()
      .min(8, { message: "password must be at keast 8 characers" })
      .max(20, { message: "Password is too long" }),
    confirmPassword: z.string().min(1, { message: "password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

const SignUp = () => {
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
  return (
    <div className="formContainer">
      <div className="box">
      <h1>Tracker</h1>
      <h3>Welcome!</h3>
      <p>kindly create your account</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-box">
        <input
          name="fullName"
          id="fullName"
          {...register("fullName")}
          type="text"
          placeholder="Full name"
        />
        {errors.fullName && <div className="errorMessage"> {errors.fullName?.message} </div>}
        </div>
        <div className="input-box">
        <input
          id="userName"
          {...register("userName")}
          type="text"
          placeholder="Username"
        />
        <FaRegCircleUser className="icons"/>
        {errors.userName && <div className="errorMessage"> {errors.fullName?.message} </div>}
        </div>
        <div className="input-box">
        <input
          id="email"
          {...register("email")}
          type="email"
          placeholder="Email Address"
        />
        <MdOutlineMail className="icons"/>
        {errors.email && <div className="errorMessage"> {errors.email?.message} </div>}
        </div>
        <div className="input-box">
        <input
          id="password"
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        <FaRegEyeSlash className="icons" />
        {errors.password && <div className="errorMessage"> {errors.password?.message} </div>}
        </div>
        <div className="input-box">
        <input
          id="c_password"
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirm Password"
        />
        <FaRegEyeSlash className="icons" />
        {errors.confirmPassword && <div className="errorMessage"> {errors.confirmPassword?.message} </div>}
        </div>
        
        <button disabled={isSubmitting} type="submit">
          {" "}
          {isSubmitting ? "Loading..." : "Sign Up"}{" "}
        </button>
      </form>
      <div className="enter">
      <p>Already have an account? <span>Log in.</span></p>
      </div>
      </div>
    </div>
  );
};

// do throw error
export default SignUp;
