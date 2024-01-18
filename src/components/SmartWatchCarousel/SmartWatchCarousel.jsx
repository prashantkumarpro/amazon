import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { products } from './SmartWatchData'
import './SmartWatchCarousel.css'
import { Link } from 'react-router-dom';


const SmartWatchCarousel = ({title}) => {
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

    return (
        <>
            <div className="blockbaster_deal">
                <div className="deal_header">
                    <h3>{title}</h3>
                    <Link>See all deals </Link>
                </div>
                {/* <Divider /> */}


                <Carousel
                    responsive={responsive}
                    swipeable={false}
                    draggable={true}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    {products.map((img, id) => (
                        <div className="products" key={id}>
                            <div className="product_img">
                                <img src={img} alt="product" />
                            </div>

                        </div>
                    ))
                    }



                </Carousel>
            </div>


        </>
    )
}

export default SmartWatchCarousel