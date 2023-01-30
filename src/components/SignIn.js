import {
  Avatar,
  Button,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import LockIcon from "@mui/icons-material/Lock";
import "./SignIn.css";
import { Checkbox } from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";

const SignIn = () => {

  const initialValues = {
    userName : "" ,
    password : ""
  }

  const Registration = () => {
    
   const formik = 
    useFormik({
      initialValues:initialValues,
      onSubmit : (values)=>{
       console.log(values)
      }
    })
  }

  const navigate = useNavigate();
  const [userName, setUserName] = useState(" ");
  const [password, setPassword] = useState(" ");

  const goToHome = () => {
    return userName === "manishrajput000766@gmail.com" &&
      password === "manish@123"
      ? navigate("/notes")
      : " ";
  };
  const NewPaper = styled(Paper)`
    padding: 25px;
    border-radius: 20px;
    box-shadow: 0px 7px 30px #888888;
    position: absolute;
    bottom: 20px;
    width: 30%;
  `;

  const NewAvatar = styled(Avatar)`
    background: green;
  `;

  const NewTypography = styled(Typography)`
    line-height: 3;
  `;
  const PassTypography = styled(Typography)`
    width: 100%;
    text-align: right;
    line-height: 3;
  `;

  const NewFormControlLabel = styled(FormControlLabel)`
    width: 100%;
  `;

  const NewGrid = styled(Grid)`
    display: flex;
  `;

  return (
    <Grid container>
      <img src="/BG.jpg" alt="background" style={{ position: "relative" }} />

      <Grid container className="m-4">
        <Grid item xs={4}></Grid>
        <Grid item xs={7}>
          <NewPaper>
            <Grid align="center">
              <NewAvatar>
                <LockIcon />
              </NewAvatar>
              <h2 className="signIn-text">Sign In</h2>
            </Grid>
            <Grid autoComplete="off">
              <TextField
                autoComplete="off"
                className="input"
                value={userName}
                label="UserName"
                name="userName"
                placeholder="UserName"
                fullWidth
                required
                onChange={(e) => setUserName(e.target.value)}
              ></TextField>
              <TextField
                autoComplete="off"
                className="input"
                value={password}
                label="Password"
                name="password"
                placeholder="passWord"
                type="password"
                fullWidth
                required
                onChange={(e) => setPassword(e.target.value)}
              ></TextField>
            </Grid>
            <NewGrid>
              <NewFormControlLabel
                control={<Checkbox name="checkedB" color="primary" />}
                label="Remember Me"
              />
              <PassTypography className="p">
                <Link href="#">Forgot Password</Link>
              </PassTypography>
            </NewGrid>
            <Grid>
              <Button
                className="p"
                type="submit"
                color="primary"
                variant="contained"
                onClick={() => goToHome()}
                fullWidth
              >
                SIGN IN
              </Button>
            </Grid>

            <NewTypography className="p">
              Do You Have An Account ? &nbsp; <Link href="#">Sign Up</Link>
            </NewTypography>
          </NewPaper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SignIn;
