import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputBase from '@material-ui/core/InputBase';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(10),
    padding: theme.spacing(1, 1, 1, 1),
  },
});

class NavBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.subTitle} variant="h6" color="inherint" style={{ fontFamily: 'Quicksand' }}>
              {/*<img  width="30%" height="30%" src="https://i.pinimg.com/originals/9d/d1/a0/9dd1a0c90caa865e3718947e2b91d35e.gif"/>*/}
            </Typography>

            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            ></IconButton>

            <InputBase />

            <Typography className={classes.title} variant="h4" noWrap>
              {this.props.currentUser ? (
                <Button
                  startIcon={<ShoppingCartOutlinedIcon />}
                  variant="outlined"
                  color="inherit"
                  style={{ fontFamily: '' }}
                >
                  {' '}
                  <Link to="/carts">Cart</Link>
                </Button>
              ) : null}
              {this.props.currentUser ? (
                <Button
                  startIcon={<AccountBoxOutlinedIcon />}
                  variant="outlined"
                  color="inherit"
                  style={{ fontFamily: '' }}
                >
                  {' '}
                  <Link to="/users">Account</Link>
                </Button>
              ) : null}
              {this.props.currentUser ? (
                <Button
                  startIcon={<ExitToAppIcon />}
                  variant="outlined"
                  color="inherit"
                  style={{ fontFamily: '' }}
                  onClick={this.props.logOut}
                >
                  {' '}
                  <Link to="/">LogOut</Link>
                </Button>
              ) : (
                <Button
                  startIcon={<AccountBoxOutlinedIcon />}
                  variant="outlined"
                  color="inherit"
                  style={{ fontFamily: '' }}
                >
                  <Link to="/login">Login</Link>
                </Button>
              )}
              {this.props.currentUser ? null : (
                <Button startIcon={<LockOutlinedIcon />} variant="outlined" color="inherit">
                  <Link to="/register">Register</Link>
                </Button>
              )}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(NavBar);
