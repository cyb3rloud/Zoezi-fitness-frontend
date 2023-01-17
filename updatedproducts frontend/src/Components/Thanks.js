import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import EmailIcon from '@material-ui/icons/Email';
import SwapHorizontalCircleIcon from '@material-ui/icons/SwapHorizontalCircle';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import YouTubeIcon from '@material-ui/icons/YouTube';




class Thanks extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <div>
        <br />

        <Paper style={{
          background:'red'
        }}>
          {/* Increase the priority of the hero background image */}
          {/**/}<div  />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Grid container>
            <Grid item md={6}>
              <div >
                <Typography  component="h1" variant="h3" color="inherit" style={{ fontFamily: '' }}><br /><br /><br /><br /><br />
                  <b>Thanks You!</b>
                </Typography>
                <Typography variant="h6" color="secondary" style={{ fontFamily: '' }} paragraph> <br />
                  <b><Link href="https://www.sociablelabs.com/ghibli-coupons"></Link></b>  <Link href="https://www.facebook.com/FansOfStudioGhibli/"> {<FacebookIcon />}</Link> <Link href="https://www.instagram.com/ghibli.movies/?hl=en">{<InstagramIcon />}</Link> <Link href="https://www.pinterest.com/noblewoods/studio-ghibli/">{<PinterestIcon />}</Link> <Link href="https://www.youtube.com/watch?v=5JRXlNBTf_M">{<YouTubeIcon />}</Link><br />
                  {<SwapHorizontalCircleIcon />} Returns must shipped be within 30 days for full refund<br />
                  {<EmailIcon />} Check email for order confirmation <br />
                  {<LocalShippingIcon />} <Link href="https://parcelsapp.com/en/tracking" color="inherint"> Track Your Order </Link> <br />
                  {<ContactPhoneIcon />} <Link href="https://lemiapp.com/lemi/the-magic-of-studio-ghibli/studio-ghibli-corporate-office" color="secondary"> Contact Us </Link>
                </Typography>

              </div>
            </Grid>
          </Grid>
        </Paper>
        <br />
      </div>
    );
  }
}

export default Thanks


