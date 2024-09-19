import React, { useEffect } from 'react'
import './SingleProductPage.css'
import { useParams } from 'react-router-dom'
import { useDataContext } from '../Context/ProductContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Stars from '../Stars/Stars';

const SingleProductPage = ({ cart, setCart }) => {
  const { ProductId } = useParams()
  const { fetchSingleProduct, isSingleLoading, singleProduct } = useDataContext()

  const API = 'https://fakestoreapi.com/products'

  useEffect(() => {
    fetchSingleProduct(`${API}/${ProductId}`)
  }, [ProductId])

  const { description, id, image, price, title, rating } = singleProduct


  // Check if rating is defined before destructuring
  const { rate, count } = rating || {};


  const addToCart = (id, title, price, imageUrl, details) => {
    const obj = {
      id, title, price, imageUrl, details
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
      {isSingleLoading && <h2>loading...</h2>}
      <div className='product-con'>

        <div className="box">
          <div className="product-img">
            <img src={image} alt="product-image" />
          </div>

        </div>
        <div className="product-des">
          <h3>{title}</h3>
          <Stars stars={rate} reviews={count} />
          <p className='detail'>{description}</p>
          <p className='price'>$ {price}</p>
          <button
            onClick={() => addToCart(id, title, price, image)}
          >Add to Cart</button>
        </div>
      </div>

    </>
  )
}

export default SingleProductPage