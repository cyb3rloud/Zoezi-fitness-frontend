import React, { Component } from 'react';
import { Redirect, Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    username: "",
    password: "",
    created: false,
    errorMessage: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  createUser = (event) => {
    event.preventDefault();
    // event.target.reset();
    const { firstName, lastName, email, phoneNumber, username, password } = this.state;

    let user = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phoneNumber,
      username: username,
      password: password
      // created: true

    };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user }),
    })
      .then((r) => r.json())
      .then((response) => {
        // console.log(response, "Register response")
        //         // if (response.status === "created") {
        //         //   this.setState({ created: true, errorMessage: "" });
        //         // }
      })
      .catch((response) =>
        this.setState({
          errorMessage:
            "Uh-oh! It didn't work...Make sure your server is running!",
        })
      );
  };

  render() {
    const { classes } = this.props

    return (
      <Grid container component="main" >
        <CssBaseline />
        <Grid item xs >
          <div >
            <Avatar>
              <LockOutlinedIcon />
            </Avatar> <br />
            <Typography component="h1" variant="h5">
              Register
    </Typography>
            <div>
              {this.state.created ? (
                <Redirect to="/login" />
              ) : (
                <div>
                  <div>
                    <p>{this.state.errorMessage}</p>
                  </div>


                  <form 
                    onSubmit={this.createUser} >
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      name="firstName"
                      autoComplete="firstname"
                      autoFocus
                      onChange={this.handleChange}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="lastname"
                      autoFocus
                      onChange={this.handleChange}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      onChange={this.handleChange}
                    />
                    <TextField
                      variant="outlined"
                      // color="#6b7d6c"
                      margin="normal"
                      required
                      fullWidth
                      id="username"
                      label="Username"
                      name="username"
                      type="username"
                      autoComplete="username"
                      autoFocus
                      onChange={this.handleChange}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      // color="#6b7d6c"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onChange={this.handleChange}
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                     
                    >
                      Register
      </Button>
                    <Grid container>
                      <Button component={Link} to="/login" variant="contained" color="secondary" fullWidth>
                        Log in Here after Registration!
          </Button>
                    </Grid>
                    <Box mt={10}>
                    </Box>
                  </form>
                </div>
              )}
            </div>
          </div>
        </Grid>
      </Grid>

    )
  }
}
export default Register