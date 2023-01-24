import React, { useEffect, useState } from "react";
import "./Cart.css";
import { IoTrashBin } from "react-icons/io5";
import { Link } from "react-router-dom";

const Cart = ({ cart, products, handleClearCart }) => {

  const [offer, setOffer] = useState(false);

  console.log(offer);

  const [freeProduct, setFreeProduct] = useState({});
  // const item=products[]
  console.log(freeProduct);

  const handleOffer = () => {
    alert('yep')
    return (

      <div class="loading">
        <div class="spinner-wrapper">
          <span class="spinner-text">wait</span>
          <span class="spinner"></span>
        </div>
      </div>

    )

  };

  useEffect(() => {
    if (cart.length > 0) {
      setOffer(true);
    }
    else {
      setOffer(false);
    }
  }, [cart])
  return (
    <div className='cart'>
      <div className='cart-header'>
        <h1>Your Items</h1>
        <button
          onClick={handleClearCart}
          className='remove-button'
          title='Clear Cart'
        >
          <IoTrashBin color='white' size={20} />
        </button>
      </div>
      {cart.map((product, index) => (
        <div key={index} className='cart-item'>
          <img src={product.pairImage} alt='' />
          <div>
            <p>
              {product.name} {product.color}
            </p>
            <p>$ {product.price}</p>
            <p>{product.quantity}</p>
          </div>
        </div>
      ))}

      <button disabled={!offer} onClick={handleOffer} className='checkout'><Link color="inherit" to="/thanks"> CHECK OUT</Link></button>
      {Object.keys(freeProduct).length > 0 && <div className='cart-item'>
        <img src={freeProduct.pairImage} alt='' />
        <div>
          <p>
            {freeProduct.name} {freeProduct.color}
          </p>
          <p>$ {freeProduct.price}</p>
        </div>
      </div>}
    </div>
  );
};

export default Cart;
