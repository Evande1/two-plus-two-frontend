"use client";
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "@/app/store/login-slice";

function ValidateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
}

function ValidatePassword(input) {
  return input.length > 0;
}

const LoginPage = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  console.log(isLoggedIn);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const passwordValid = ValidatePassword(password);
  const emailValid = ValidateEmail(email);
  const emailInputIsInvalid = emailTouched && !emailValid;
  const passwordInputIsInvalid = passwordTouched && !passwordValid;

  const submitHandler = (e) => {
    e.preventDefault();
    setEmailTouched(true);
    setPasswordTouched(true);

    if (passwordInputIsInvalid || emailInputIsInvalid) {
      console.log("email validity: ", emailInputIsInvalid);
      console.log("password validity: ", passwordInputIsInvalid);
      console.log("something wrong");
      return;
    } else {
      setEmailTouched(false);
      setPasswordTouched(false);
      console.log(email);
      console.log(password);
      setEmail("");
      setPassword("");
      dispatch(loginActions.login());
    }

    //handling login state change
  };

  return (
    <div>
      {isLoggedIn && <p>User is logged in!!</p>}
      <form autoComplete="off" onSubmit={submitHandler}>
        <Stack alignItems="center">
          <TextField
            type="email"
            label="email"
            placeholder="john@email.com"
            sx={{
              width: 300,
            }}
            error={emailInputIsInvalid}
            size="small"
            margin="normal"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailTouched(true);
            }}
            required={true}
          />
          <TextField
            size="small"
            sx={{
              width: 300,
            }}
            error={passwordInputIsInvalid}
            type="password"
            label="password"
            placeholder="******"
            value={password}
            margin="normal"
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordTouched(true);
            }}
            required={true}
          />
          <Button type="submit" margin="normal">
            Login
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default LoginPage;
