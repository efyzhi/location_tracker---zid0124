import React from "react";
import { useForm } from "react-hook-form";
import "./login.css";

const Login = () => {
  return (
    <div className="main-box">
      <div className="form-box">
        <h1>Tracker</h1>
        <h3>Welcome Back</h3>
        <p> Please sign into your account</p>
        <form>
          <div>
            <input
              name="u_nameEmail"
              id="u_name"
              placeholder="username/email"
              className="input-check"
            />
          </div>
          <div>
            <input name="password" 
              id="password" 
              placeholder="password" 
              className="input-check"
            />
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
                <a href="/signup">Forget Password</a>
            </div>
            <button type="submit">Sign In</button>
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
