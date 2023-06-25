'use client';

import React from "react";
import { auth } from "../../../auth/firebase";
import { signOut } from "firebase/auth";

const LogoutPage = () => {
  const logout = () => {
    signOut(auth)
    .then(() => {
      console.log('Sign out successful')
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <div>
      <p>Logout Page</p>

      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

export default LogoutPage;
