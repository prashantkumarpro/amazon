import React, { useEffect, useState } from 'react'
import './SingleProductPage.css'
import { useParams } from 'react-router-dom'
import { useDataContext } from '../Context/ProductContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Stars from '../Stars/Stars';

const SingleProductPage = ({ cart, setCart }) => {
  const { ProductId } = useParams()
  const { fetchSingleProduct, isSingleLoading, singleProduct } = useDataContext()
  const [conversionRate, setConversionRate] = useState(0);
  const API = 'https://fakestoreapi.com/products'

  useEffect(() => {
    fetchSingleProduct(`${API}/${ProductId}`)
  }, [ProductId])


  // Fetch the conversion rate from USD to INR
  const fetchConversionRate = async () => {
    try {
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD'); // Example API
      const data = await response.json();
      console.log(data)
      setConversionRate(data.rates.INR); // Set INR conversion rate
    } catch (error) {
      console.error("Error fetching conversion rate:", error);
    }
  };

  useEffect(() => {
    fetchConversionRate(); // Fetch the conversion rate when the component mounts
  }, []);

  const { description, id, image, price, title, rating } = singleProduct


  // Check if rating is defined before destructuring
  const { rate, count } = rating || {};


  const addToCart = (description, id, image, price, title, rating) => {
    const obj = {
      description, id, image, price, title, rating
    }
    setCart([...cart, obj])
    toast.success('item added!', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }



  return (
    <>


      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {isSingleLoading && <div style={{ position: 'absolute', top: '50%', left: '50%' }} >loading...</div>}
      <div className='single-product-con'>

        <div className="box">
          <div className="product-img">
            <img src={image} alt="product-image" />
          </div>

        </div>
        <div className="product-des">
          <h3>{title}</h3>
          <Stars stars={rate} reviews={count} />
          <p className='detail'>{description}</p>
          <strong className='price'>₹ {(price * conversionRate).toFixed(0)}</strong>
          <br /> 
          <strong
            style={{ fontSize: '16px', fontWeight: '200', margin: '20px 0' }}
            className='price'>$ {price}</strong>
          <br />
          <button
            onClick={() => addToCart(description, id, image, price * conversionRate, title, rating)}
          >Add to Cart</button>
        </div>
      </div>

    </>
  )
}

export default SingleProductPage