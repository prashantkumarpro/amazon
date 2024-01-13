import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../Home/Home.css'
const ProductCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const products = [
    { name: 'Product 1', description: 'Description 1', image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg' },
    { name: 'Product 2', description: 'Description 2', image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg' },
    // Add more products
  ];

  return (
    <Carousel responsive={responsive}>
        <div className="deals_product">
        {products.map((product, index) => (
        <div key={index}>
            <div className="box">
            <img src={product.image} alt={product.name} />
            </div>
        
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          {/* Add more product details as needed */}
        </div>
      ))}





            {/* <div className="box">
              <img src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg" alt="" />
            </div>
            <div className="box">
              <img src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" alt="" />
            </div> */}
          </div>
     
    </Carousel>
  );
};

export default ProductCarousel;
