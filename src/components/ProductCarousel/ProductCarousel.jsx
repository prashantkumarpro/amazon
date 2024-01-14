import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ProductCarousel.css'
import Divider from '@mui/material/Divider';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,

  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,

  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,

  },
};



const ProductCarousel = () => {
  return (

    <div className="blockbaster_deal">
      <div className="deal_header">
        <h3>Blockbuster deals</h3>
        <h3>See all deals </h3>
      </div>
      <Divider />


      <Carousel responsive={responsive}>
        <div className="box1">
          <img src="https://m.media-amazon.com/images/I/51HnWtX7klL._AC_UY218_.jpg" alt="" />
        </div>
        <div className="box1">
          <img src="https://m.media-amazon.com/images/I/51HnWtX7klL._AC_UY218_.jpg" alt="" />
        </div>
        <div className="box1">
          <img src="https://m.media-amazon.com/images/I/51HnWtX7klL._AC_UY218_.jpg" alt="" />
        </div>
        <div className="box1">
          <img src="https://m.media-amazon.com/images/I/51HnWtX7klL._AC_UY218_.jpg" alt="" />
        </div>
        <div className="box1">
          <img src="https://m.media-amazon.com/images/I/51HnWtX7klL._AC_UY218_.jpg" alt="" />
        </div>
      
      </Carousel>
    </div>

  );
};

export default ProductCarousel;
