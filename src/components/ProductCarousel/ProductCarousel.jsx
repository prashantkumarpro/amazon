import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ProductCarousel.css'
import Divider from '@mui/material/Divider';
import { products } from './ProductData'
import { Link } from 'react-router-dom';
console.log(products)
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },

  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,

  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,

  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,

  },
};



const ProductCarousel = ({ title }) => {
  return (

    <div className="blockbaster_deal">
      <div className="deal_header">
        <h3>{title}</h3>
        <Link>See all deals </Link>
      </div>
      <Divider />


      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {products.map((product) => {
          
          return (

            <div className="products" key={product.id}>
              <div className="product_img">
                <img src={product.detailUrl} alt="product" />
              </div>
              <p className="products_name">{product.title.shortTitle}</p>
              <p className="products_offer" style={{ color: "#  007185" }}>{product.discount}</p>
              <p className="products_explore">{product.tagline}</p>
            </div>


          )
        })}



      </Carousel>
    </div>

  );
};

export default ProductCarousel;
