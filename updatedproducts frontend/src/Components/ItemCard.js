import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Typography from '@material-ui/core/Typography';


class ItemCard extends Component {
    render() {
        return (
            <div className="item-card" style={{fontFamily: 'Quicksand'}}>
                <img src={this.props.item.image} alt={this.props.item.name}></img>
                <Typography gutterBottom variant="h7" style={{fontFamily: ''}} >
               <b> {this.props.item.name} </b> <br/>
               ${this.props.item.price}<br/><br/>
                <p> {this.props.item.description}</p>
                </Typography>
                <Button endIcon={<AddShoppingCartIcon/>} variant="contained" color="secondary" style={{fontFamily: ''}} onClick={() => (this.props.addToCart(this.props.item, this.props.user))} className="add-btn" >Add to Cart</Button>
            </div>
        );
    };
}


export default ItemCard;

