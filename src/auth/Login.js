import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LoginUser } from '../actions/authActions';
import { useNavigate } from 'react-router-dom';
import { Grid, Box, Typography, Button } from "@mui/material";
import loginImage from "../images/login-bg.png";
import { Form } from "react-bootstrap";
import "./Login.css";

const Login = () => {
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('jhon@gmail.com');
  const [password, setPassword] = useState('1234');

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(LoginUser(email, password));
    navigate('/home');
  };

  return (
    <Box>
      <Grid container>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box className="loginFormContainer">
            <img src={loginImage} alt="login" style={{ width: "100%" }} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box className="loginFormContainer">
            <Typography sx={{ typography: { md: "h2", xs: "h3" } }} className="text-center mb-4">
              Login
            </Typography>
            <Form noValidate  onSubmit={handleLogin}>
              <Form.Group className="mb-3 col-md-8 formgroupText">
  
                <Typography variant="h6" > Email </Typography>
                <Form.Control
                  type="name"
                  placeholder="Enter yourEmail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{padding:"15px"}}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-md-8 formgroupText">
                <Typography variant="h6" >Password </Typography>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{padding:"15px"}}

                />
              </Form.Group>
              <div className="d-flex justify-content-center">
                  <div className="d-grid gap-2 col-8 mx-auto col-xs-12 ">
                    <Button
                      type="submit"
                      variant="outlined"
                    >
                      Login
                    </Button>
                    </div>
                    </div>
            </Form>
          </Box>
        </Grid>
      </Grid>
    </Box>

    // <div>
    //   <h2>Login</h2>
    //   <form onSubmit={handleLogin}>
    //     <div>
    //       <label>Email:</label>
    //       <input
    //         type="email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label>Password:</label>
    //       <input
    //         type="password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         required
    //       />
    //     </div>
    //     <button type="submit">Login</button>
    //   </form>
    // </div>
  );
};

export default Login;
