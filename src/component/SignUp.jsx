import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import Logo from "./Images/Logo.svg";
import pablo from "./Images/pablo-sign-in 1.svg";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";

const SignUp = () => {
  const [email, setEmail] = useState(""); // Initialize email state
  const [password, setPassword] = useState(""); // Initialize password state
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleShow = () => {
    setShowPassword(!showPassword);
  };

  const handleClick = (e) => {
    e.preventDefault();

    // Hardcoded allowed email and password
    const allowedEmail = "test24@test.com";
    const allowedPassword = "testpassword1234";

    // Check if entered credentials match the allowed ones
    if (email === allowedEmail && password === allowedPassword) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          console.log("User successfully logged in:", userCredentials.user);
          // You can navigate to another page or perform other actions on successful login
          navigate("/dashboard"); // Example: Redirect to the dashboard page
        })
        .catch((error) => {
          console.error("Login failed:", error.message);
          // Handle the error, you can show a message to the user or perform other actions
        });
    } else {
      console.error("Invalid email or password");
      // Handle invalid credentials, show a message to the user or perform other actions
    }
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
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="show" onClick={handleShow}>
                {showPassword ? "Hide password" : "Show"}
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
