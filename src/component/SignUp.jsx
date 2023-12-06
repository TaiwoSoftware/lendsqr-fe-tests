import React, { useEffect, useState } from "react";
import Logo from "./Images/Logo.svg";
import pablo from "./Images/pablo-sign-in 1.svg";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  localStorage.clear();
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const [mainPassword, setMainPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    localStorage.setItem(e.target.id, e.target.value);
  };

  const handleShow = () => {
    setShowPassword(!showPassword)
  };

  const handleClick = (e) => {
    e.preventDefault();
    const isEmailEmpty = email.length === 0;
    const isPasswordEmpty = password.length === 0;

    isEmailEmpty || isPasswordEmpty
      ? console.log("Email or password is empty.")
      : navigate('/dashboard')


  };

  return (
    <div>
      <div className="allContainer">
        <div className="images">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="illustration-container">
            <img src={pablo} alt="Illustration" />
          </div>
        </div>
        <div className="formPart">
          <div className="formHeader">
            <h1>Welcome!</h1>
            <p className="enter">Enter details to login.</p>
          </div>
          <div className="form">
            <form>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                onChange={handleChange}
              />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                placeholder="Password"
                required
                onChange={(e) => {
                  
                  localStorage.setItem(e.target.id, e.target.value);
                }}
              />
              <p className="show" onClick={handleShow}>
              {showPassword ?  'Hide password' : 'Show'}
              </p>
              <p className="forgot">FORGOT PASSWORD?</p>
              <input onClick={handleClick} type="submit" value="LOG IN" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
