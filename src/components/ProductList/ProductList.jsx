import React from 'react'
import './ProductList.css'
import { Link } from 'react-router-dom';
import { useFilterDataContext } from '../Context/FilterProductContext'

const ProductList = () => {
  const {
    filter_data,
    sortBy,
    categories,
    handleCategoryClick,
    prices,
    handlePricesClick,
    filters:{ text },
    filterValueHandler,
} = useFilterDataContext()

return (
  <>
    <section>

      <div className="grid">
        <div className="filter-page">

          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ margin: '20px' }}>

            <input
            className='serch-box'
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
                  <strong className='price'>₹ {product.price}</strong>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section >
  </>
)
}

export default ProductList