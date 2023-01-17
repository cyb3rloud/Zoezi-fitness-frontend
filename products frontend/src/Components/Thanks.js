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


const styles = theme => ({
  mainFeaturedPost: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(1),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 430,
    bottom: 35,
    right: 920,
    left: 10,
    backgroundColor: 'rgba(0,0,0,.8)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6.8),
      paddingRight: 0,
    },
  },
});

class Thanks extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <div>
        <br />

        <Paper className={classes.mainFeaturedPost} style={{
          background:'red'
        }}>
          {/* Increase the priority of the hero background image */}
          {/**/}<div className={classes.overlay} />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturedPostContent}>
                <Typography className={classes.title} component="h1" variant="h3" color="inherit" style={{ fontFamily: '' }}><br /><br /><br /><br /><br />
                  <b>Thanks You!</b>
                </Typography>
                <Typography className={classes.subTitle} variant="h6" color="secondary" style={{ fontFamily: '' }} paragraph> <br />
                  <b><Link href="https://www.sociablelabs.com/ghibli-coupons"><i>Post Content @GhibliFanClub for 20% Discount </i></Link></b>  <Link href="https://www.facebook.com/FansOfStudioGhibli/"> {<FacebookIcon />}</Link> <Link href="https://www.instagram.com/ghibli.movies/?hl=en">{<InstagramIcon />}</Link> <Link href="https://www.pinterest.com/noblewoods/studio-ghibli/">{<PinterestIcon />}</Link> <Link href="https://www.youtube.com/watch?v=5JRXlNBTf_M">{<YouTubeIcon />}</Link><br />
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

export default withStyles(styles)(Thanks)



