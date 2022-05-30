import React from 'react';
import "../CartStatus/CartStatus.css";
import {Link} from "react-router-dom";

const CartStatus = (props) => {
 
  const handleCartButtonClick = () => {
    console.log("Cart Button");
  }

  return (
    <div className='cart-button-container'>
      <Link to="/carrito" className='link-cart-btn'>
        <div className='cart-button-content'
          onClick={handleCartButtonClick}>Agregado al carrito <h4 className='cart-btn-cantidad'>{props.cantidad}</h4>
        </div>
      </Link>
    </div>
  )
}

export default CartStatus;