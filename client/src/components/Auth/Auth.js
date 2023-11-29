import {
  Avatar,
  createTheme,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
  Button,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { AiOutlineLock } from "react-icons/ai";
import Input from "./Input";
import jwt_decode from 'jwt-decode';
import { GoogleLogin } from "@react-oauth/google";

import useStyles from "./styles";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { signin, signup } from "../../actions/auth";

const initialState ={
  firstName:'',
  lastName:'',
  email:'',
  password:'',
  confirmPassword:'',
}

const Component = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignUp] = useState(false);
  const [formData,setFormData]=useState(initialState)
  const dispatch=useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(isSignup){
      dispatch(signup(formData,navigate))
    }else{
      dispatch(signin(formData,navigate))
    }
  };

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value});
  };

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    setShowPassword(false);
  };

  const googleFailure=() => {
    console.log("Login Failed");
  }

  const googleSuccess=async (res) => {
    const token = res?.credential;
    const result = jwt_decode(token);

    try {
      dispatch({ type: 'AUTH', data: { result, token } });
      
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <AiOutlineLock />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <Container className={classes.googleButton}>
          <GoogleLogin      
            onSuccess={googleSuccess}
            onError={googleFailure}
          />
          </Container>
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

const theme = createTheme();

const Auth = () => {
  return (
    <ThemeProvider theme={theme}>
      <Component />
    </ThemeProvider>
  );
};

export default Auth;
