import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react'
import { auth } from "./firebase";
const CreateAccount = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const signIn = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div>
      <form onSubmit={signIn}>
        <h1>Create Account</h1>
        <input type='email' placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="Create account" />
      </form>
    </div>
  );
}

export default CreateAccount;
