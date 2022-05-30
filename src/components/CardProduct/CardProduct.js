import React from 'react';
import "../CardProduct/CardProduct.css";

const CardProduct = (props) => {

  const handleAddClick = () => {
    console.log("Click");
  }

  return (
    <div className='card-product-container'>
      <img src='http://motoguzzioficial.com.ar/assets/stone/01-V7_III_Stone.jpg' alt='motorcycle' className='card-image'/>
      <div><strong>Nombre:</strong> {props.productName}</div>
      <div><strong>Condición:</strong> {props.productCondition}</div>
      <div><strong>Precio:</strong> {props.productPrice}</div>
      <button className='card-btn' onClick={handleAddClick}>Add to Cart</button>
    </div>
  )
}

export default CardProduct;