import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import EmailIcon from '@material-ui/icons/Email';
import PersonIcon from '@material-ui/icons/Person';


class Account extends Component{ 
  
    state = {
    showForm: false
  }
  
  handleShowForm = () => {
    this.setState({ showForm: !this.state.showForm })
    // console.log(this.state.showForm)
  }
  
render(){
    const {classes} = this.props
    // console.log(this.props.currentUser)
    // debugger 

return (
  <div>
    <Paper >
{/* Increase the priority of the hero background image */}
{<img style={{ display: 'none' }} src={`url(https://data.whicdn.com/images/159503389/original.gif)`} alt={classes.imageText} />}
{/**/}<div  />

<Grid container spacing={9} justify="center">
<Grid item md={3.5}>
<div  container spacing={3} justify="center">

<br/>
<Typography  justify="center" color="secondary" variant="h5" color="inherint" style={{fontFamily: ''}} paragraph> <br/> 
<h2>{<PersonIcon />}<u></u> {this.props.currentUser.username}</h2>
<h2>{<EmailIcon />}<u></u> {this.props.currentUser.email}</h2><br/>
{this.props.currentUser ? <Button  variant="outlined" color="secondary" style={{fontFamily: ''}}><Link to="/edit"><b>Edit Account</b></Link></Button> : null}

</Typography>
</div>
</Grid>
</Grid>

</Paper>

</div>
);
}}

export default Account