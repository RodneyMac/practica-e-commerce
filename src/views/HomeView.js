import React from 'react';
import CardProduct from '../components/CardProduct/CardProduct';

const HomeView = () => {
  return (
    <>
      <h2>Home View</h2>
      <CardProduct productName="Guzzi" productPrice={300} productCondition="Usado"/>
    </>
  )
}

export default HomeView;