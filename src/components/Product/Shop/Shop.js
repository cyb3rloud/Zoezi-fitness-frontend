import React, { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  console.log(products);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    // const newCart=[...cart,selectedProduct];
    // console.log("Add to cart");
    // setCart(newCart);

    const exists = cart.find((product) => product.id == selectedProduct.id);
    console.log(exists);

    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
      setCart(newCart);
    }
    else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      selectedProduct.quantity = selectedProduct.quantity + 1;
      newCart = [...rest, selectedProduct];
      setCart(newCart);
    }
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <><div className="full">
      <div className="prod-title"> Our Products</div>

      <div className='shop'>
        <div className='products-container'>
          {products.map((product, index) => {
            return (
              <Product
                key={index}
                product={product}
                handleAddToCart={handleAddToCart}
              />
            );
          })}
        </div>
        <div className='cart-container'>
          <Cart
            cart={cart}
            products={products}
            handleClearCart={handleClearCart}
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Shop;
