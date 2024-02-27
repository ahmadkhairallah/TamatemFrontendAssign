import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
const Login = () => {
  const [state, setState] = useState({ email: null, password: null });
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const handleChange = (e) => {
    e.persist();
    setState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
    if (e.target.name == "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // Check if the entered email matches the regular expression
      setIsEmailValid(emailRegex.test(e.target.value));
    } else {
      if (e.target.value.length < 6) {
        setIsPasswordValid(false);
      } else {
        setIsPasswordValid(true);
      }
    }
  };
  const checkDisabled = () => {
    if (state.password && state.email) {
      if (state.password.length > 5) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Check if the entered email matches the regular expression
        return !emailRegex.test(state.email);
      } else {
        return true;
      }
    } else {
      return true;
    }
  };
  return (
    <div className="LoginFixedConatiner">
      <img
        src="https://avatars.githubusercontent.com/u/124091983"
        className="CenteredLogo"
      />
      <div className={isEmailValid ? "InputDiv" : "InputDiv error"}>
        <TextField
          error={!isEmailValid}
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          helperText={isEmailValid ? "" : "Email is not in correct format."}
          value={state.email}
          onChange={handleChange}
          name="email"
          className="inputTextField"
        />
      </div>
      <div className={isPasswordValid ? "InputDiv" : "InputDiv error"}>
        <TextField
          error={!isPasswordValid}
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          helperText={
            isPasswordValid ? "" : "Password should be more than 6 characters."
          }
          value={state.password}
          onChange={handleChange}
          name="password"
          className="inputTextField"
        />
      </div>
      <div className="buttonDiv">
        <Button
          variant="contained"
          disabled={checkDisabled()}
          className="RedButton"
        >
          Login
        </Button>
      </div>
    </div>
  );
};
export default Login;
