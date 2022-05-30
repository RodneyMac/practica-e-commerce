import React from "react";
import HomeView from "./views/HomeView";
import CarritoView from './views/CarritoView';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeView/>}/>
        <Route path="/carrito" element={<CarritoView/>}/>
      </Routes>
    </>
  );
}

export default App;
