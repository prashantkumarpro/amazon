import React, { useEffect, useState } from 'react'
import './ProductList.css'
import { Link, useNavigate } from 'react-router-dom';
import { useFilterDataContext } from '../Context/FilterProductContext'
import { ToastContainer, toast } from 'react-toastify';
import { useAuthContext } from '../Context/UserContext';


const ProductList = ({ cart, setCart }) => {
  const [conversionRate, setConversionRate] = useState(0);
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const {
    filter_data,
    sortBy,
    categories,
    handleCategoryClick,
    prices,
    handlePricesClick,
    filters: { text },
    filterValueHandler,

  } = useFilterDataContext()


  const addToCart = (id, title, price, image, description) => {
    const obj = {
      id, title, price, image, description
    }
    if (user) {
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
    } else {
      navigate('/Login')
    }



  }

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

      <div className='product-section'>

        <div className="grid">
          <div className="filter-page">

            <form className='filter-box'
              onSubmit={(e) => e.preventDefault()}
            >

              <input
                placeholder='Search here...'
                type="text"
                name='text'
                onChange={filterValueHandler}
                value={text}
              />

            </form>

            <div className="brand">
              <h3>Category</h3>
              <div className="brand-con">
                {categories.map((category, index) => (
                  <div
                    className="brand-name hover"
                    key={index}
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>
            <div className="price-filter">
              <h3>Price</h3>
              {prices.map((price, index) => (
                <div className="price hover"
                  key={index}
                  onClick={() => handlePricesClick(price)}
                >
                  {price}

                </div>
              ))}


            </div>
          </div>

          <div className='product-grid'>
            <div className="header">
              <p>{filter_data.length} products total</p>
              <div className="sort-con">
                <label htmlFor="sortKey">sort by: </label>
                <select id="sortKey" onChange={sortBy}>
                  <option value="" disabled >select</option>
                  <option value="A-Z">A-Z</option>
                  <option value="Z-A">Z-A</option>
                  <option value="price low to high"> price low to high</option>
                  <option value="price high to low">price high to low</option>
                </select>
              </div>

            </div>
            <ul>
              {filter_data.map(product => (
                <li key={product.id}>
                  <div className='box' style={{ backgroundColor: '#fffff' }}>
                    <Link to={`/SingleProductPage/${product.id}`} className='product-img'>
                      <img src={product.image} alt='product-image' />
                    </Link>

                    <p>{product.title}</p>
                    {/* <small>$</small> */}
                    <strong className='price'>₹ {(product.price * conversionRate).toFixed(0)}</strong>
                    <strong
                      style={{ fontSize: '16px', fontWeight: '200' }}
                      className='price'>$ {product.price}</strong>
                    <button
                      onClick={() => addToCart(product.id, product.title, product.price * conversionRate, product.image, product.description)}
                    >Add to Cart</button>

                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div >
    </>
  )
}

export default ProductList