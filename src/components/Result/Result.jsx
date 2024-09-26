import React, { useEffect, useState } from 'react';
import './Result.css';
import { Link, useParams } from 'react-router-dom';
import { products } from '../ProductList/data';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Result = ({ cart, setCart }) => {
  const [filterData, setFilterData] = useState([])

  const { queryResult } = useParams();


  useEffect(() => {

    const filteredData = () => {

      const filteredQuery = products.filter((product) => product.name.toLowerCase().indexOf(queryResult.toLowerCase()) !== -1)

      setFilterData(filteredQuery)
    }

    filteredData()

  }, [queryResult])

  const addToCart = (description, id, image, price, title) => {
    const obj = {
      description, id, image, price, title
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
      {filterData.length > 0 ? (
        <div className="result-product-grid">
          <h1 style={{
            textAlign: 'left',
            padding: '25px',
            fontSize: '25px'
          }}>Result:</h1>
          <ul>
            {filterData.map(product => (
              <div
                className='item-box'
                key={product.id}>

                <Link
                  to={`/MobileSingle/${product.id}`}
                  className="product-img">
                  <img src={product.image} alt="product-image" />
                </Link>
                <h3>{product.name}</h3>

                <p className='price'>₹ {product.price}</p>
                <button
                  onClick={() => addToCart(product.description, product.id, product.image, product.price, product.title)}
                >Add to Cart</button>
              </div >
            ))}
          </ul></div>) : (
        <div style={{
          width: '100%',
          height: '100vh',
          padding: '20px'
        }}>
          <h1
            style={{
              textAlign: 'left',
              fontSize: '25px'
            }}>Result:

          </h1>
          <p style={{

            marginTop: '10px',
            textAlign: 'left',
            fontSize: '19px'
          }}>Products not found</p>
        </div>
      )}

    </>
  );
};

export default Result;
