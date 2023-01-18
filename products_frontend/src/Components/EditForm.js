import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: 'red',
  },
  form: {
    width: '80%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class EditForm extends Component {
  state = {
    username: '',
    email: '',
    // firstName: "",
    // lastName: "",
    // phoneNumber: "",
    // shippingAddress: ""
  };

  handleSubmit(e) {
    //must match up to keys in localhost
    //console.log(e.target, "Event")
    e.preventDefault();
    let newInfo = {
      username: this.state.username,
      email: this.state.email,
      // first_name: this.state.firstName,
      // last_name: this.state.lastName,
      // phone_number: this.state.phoneNumber,
      // shipping_address: this.state.shippingAddress
    };

    let reqPack = {
      headers: { 'Content-Type': 'application/json' },
      method: 'PATCH',
      body: JSON.stringify(newInfo),
    };
    // console.log(this.props, "Current User in Edit")

    fetch('http://localhost:3000/users/' + this.props.currentUser.id, reqPack)
      .then((resp) => resp.json())
      .then((newInfo) => {
        this.props.patchInfo(newInfo);
        e.target.reset();
      });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="form">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form">
            <TextField
              varient="outlined"
              color="primary"
              type="text"
              onChange={(e) => this.setState({ username: e.target.value })}
              placeholder="Username"
              class="form-control"
              id="usernamevalue"
              name="username"
            />

            <div className="form">
              <TextField
                varient="outlined"
                color="primary"
                type="email"
                onChange={(e) => this.setState({ email: e.target.value })}
                placeholder="Email@gmail.com"
                class="form-control"
                id="emailvalue"
                name="emailName"
              />
            </div>
          </div>

          <Button type="submit" width="50%" variant="contained" color="secondary" className={classes.submit}>
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
export default withStyles(styles)(EditForm);
