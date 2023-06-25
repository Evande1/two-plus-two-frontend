'use client';

import React, { useState } from "react";
import { auth } from "../../../auth/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import './login.css'

const LoginPage = () => {
  const [email, setEmail] = useState('test123@gmail.com')
  const [password, setPassword] = useState('test123')

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div>
      <p>Login Page</p>
      <p><small>Default email and password has been set</small></p>

      <div className="loginForm">
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

        <button onClick={() => signIn()}>Sign In</button>
        <button onClick={() => signUp()}>Sign Up</button>
      </div>
    </div>
  );
};

export default LoginPage;
