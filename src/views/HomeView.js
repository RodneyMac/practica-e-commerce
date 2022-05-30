import React from 'react';
import CardProduct from '../components/CardProduct/CardProduct';
import CartStatus from '../components/CartStatus/CartStatus';
import Snackbar from '../components/Snackbar/Snackbar';

// const data [
//   {

//   }
// ]

const HomeView = () => {
  return (
    <>
      
      <Snackbar/>
      <CartStatus cantidad={0}/>
      <CardProduct productName="Guzzi" productPrice={300} productCondition="Usado"/>
    </>
  )
}

export default HomeView;