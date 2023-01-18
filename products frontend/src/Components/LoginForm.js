import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from "@material-ui/core/styles";

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';



const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '110%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});



class LoginForm extends Component {

  state = {
    username: "",
    password: "",
    error: ""
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  login = (event) => {
    event.preventDefault();
    event.target.reset();

    const { username, password } = this.state;
    const user = { username, password };

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    })
      .then((r) => r.json())
      .then((response) => {
        console.log(response)
        if (response.user) {
          this.props.updateCurrentUser(response.user);
          localStorage.token = response.jwt;
        } else {
          this.setState({ error: response.message })
        }
        // localStorage.token = response.jwt;
        //Video: 
        // if(response.error_message){
        // alert(response.error_message)
        // }else{
        // this.props.updateCurrentUser(response)
        // }
        //this.props.updateCurrentUser(response);
      });
  };


  render() {
    const { classes } = this.props

    return (

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <br />
        <br />

        <div className={classes.paper}>
          <Avatar className={classes.avatar}>

            <AccountBoxOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Login
        </Typography>
          <form onSubmit={this.login}
            className={classes.form}>
            <h2>{this.state.error}</h2>

            {/*<form className={classes.form} noValidate>*/}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="username"
              label="Username"
              id="username"
              autoComplete="username"
              autoFocus
              onChange={this.handleChange}

            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              <b>Login</b>
            </Button>
            <br />
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  <br />
                  <br />
                  <b>Forgot password?</b>
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register">
                  <br />
                  <br />
                  <b>{"Don't have an account? Register Here!"}</b>
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8} >
          <br />
          <br />
          <br />
          <br />
          <br />
        </Box>

      </Container>

    );
  }
}



export default withStyles(styles)(LoginForm)