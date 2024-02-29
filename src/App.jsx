import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import { MobileList } from './components/ProductList/MobileList.jsx';
import SingleProduct from './components/ProductDetail/SingleProduct.jsx';
import Result from './components/Result/Result.jsx';
import { products } from './components/ProductList/data.jsx';
import Cart from './components/Cart/Cart.jsx';
import SingleProductPage from './components/SingleProductPage/SingleProductPage.jsx';
import Stars from './components/Stars/Stars.jsx';
import ProductList from './components/ProductList/ProductList.jsx';
import Login from './components/Login/Login.jsx';
import Registration from './components/Registration/Registration.jsx';



const App = () => {
  const [data, setData] = useState([...products]);
  const [cart, setCart] = useState([])



  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout setData={setData} data={data} cart={cart} />} >
          <Route index element={<Home />} />
          <Route path="/Product" element={<ProductList cart={cart} setCart={setCart} />} />
          <Route path="Mobile" element={<MobileList item={data} cart={cart} setCart={setCart} />} />
          <Route path="SingleProduct/:id" element={<SingleProduct cart={cart} setCart={setCart} />} />
          <Route path="Result/:queryResult" element={<Result cart={cart} setCart={setCart} data={data} />} />
          <Route path="Cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/SingleProductPage/:ProductId" element={<SingleProductPage cart={cart} setCart={setCart} />} />
          <Route path="/Stars" element={<Stars />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path='/Login' element={<Login />} />
        <Route path='/Registration' element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
