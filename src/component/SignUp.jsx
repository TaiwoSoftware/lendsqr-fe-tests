import React, { useEffect, useState } from "react";
import Logo from "./Images/Logo.svg";
import pablo from "./Images/pablo-sign-in 1.svg";
const SignUp = () => {
  localStorage.clear();
  let email = document.querySelector("#email");
  let password = document.querySelector("#password");

  const handleChange = (e) => {
    e.preventDefault();
    localStorage.setItem(e.target.id, e.target.value);
  };

  const handleShow = () => {
    alert("show password");
  };

  const handleClick = (e) => {
    e.preventDefault()
    setTimeout(() => {
      setValues(!values)
    },1000)
  }

  

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
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
                onChange={handleChange}
              />
              <p className="show" onClick={handleShow}>
                SHOW
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
