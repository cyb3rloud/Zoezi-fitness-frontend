import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(0),
    marginRight: theme.spacing(0),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },

  cardGrid: {
    position: 'relative',
    display: 'flex',
    backgroundColor: 'white',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  card: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '88%', //'56.25%'
  },
  cardContent: {
    flexGrow: 10,
  },
  footer: {
    // backgroundColor: theme.palette.grey[200],
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
});

const cards = [1, 2, 3, 4, 5, 6, 7, 9];
// const cards = this.props.carts

class Cart extends Component {
  state = {
    currentUserData: [],
  };

  componentDidMount() {
    if (this.props.currentUser) {
      // fetch("http://localhost:3000/users/" + currentUser.id)
      fetch(`http://localhost:3000/users/${this.props.currentUser.id}`)
        .then((res) => res.json())
        .then((currentUserData) => {
          this.setState({ currentUserData });
        });
    }
  }

  totalPrice = (array) => {
    let total = 0;
    array.carts.map((cart_item) => (total += parseInt(cart_item.item.price)));
    return total;
  };

  renderCards = (array) => {
    const { classes } = this.props;

    return array.carts.map((cart_item) => (
      <Grid item key={cart_item.id} xs={1} sm={1} md={3}>
        <Card className={classes.card}>
          <CardMedia className={classes.cardMedia} image={cart_item.item.image} title={cart_item.item.name} />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h6" component="h1" style={{ fontFamily: '' }}>
              <b>{cart_item.item.name}</b>
            </Typography>
            <Typography>ksh. {cart_item.item.price}</Typography>
          </CardContent>
          <CardActions>
            <h1>
              <button
                className="del-btn"
                size="medium"
                color="red"
                variant="contained"
                style={{ fontFamily: '' }}
                endIcon={<DeleteOutlinedIcon />}
                onClick={() => this.props.removeFromCart(cart_item)}
              >
                <b>Delete</b>
              </button>
            </h1>
          </CardActions>
        </Card>
      </Grid>
    ));
  };

  render() {
    const carts = this.props;
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />

        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <br />
                    <br />
                    <br />
                    <Button variant="contained" align="center" color="primary" style={{ fontFamily: '' }}>
                      <Link to="/items"> Browse All Items</Link>
                    </Button>
                    <Button variant="contained" align="center" color="secondary" style={{ fontFamily: '' }}>
                      <Link to="/checkout">Checkout</Link>
                    </Button>
                    <br />
                    <br />
                    <br />
                    <Typography variant="h4" align="center" color="inherint" paragraph style={{ fontFamily: '' }}>
                      <span className="circle-sketch-highlight">
                        <b>Cart Total</b>: <b>ksh. {this.totalPrice(carts)}.00</b>
                      </span>
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="lg" color="primary">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {carts ? this.renderCards(carts) : null}
              <div align="right">
                <img width="15%" height="1%" src="https://media2.giphy.com/media/dZiikBDkgHfRvfdHZ9/source.gif" />
              </div>
            </Grid>
          </Container>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom></Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p"></Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Cart);
