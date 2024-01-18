import React from 'react';
import './Home.css';
import { useDataContext } from '../Context/ProductContext';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import ProductCarousel from '../ProductCarousel/ProductCarousel';
import SmartWatchCarousel from '../SmartWatchCarousel/SmartWatchCarousel';



const Home = () => {
  const { isLoading, mensCloths } = useDataContext();
  return (
    <>

      <div className='home-container'>
        <div className='banner_part'>
          <Banner />
        </div>

        {(isLoading) ? <h2 style={{
          textAlign: 'center',
          margin: '20px',
          zIndex: '999'
        }}> Loading</h2> : ''}

        <div className="card-con">
          <div className="card">
            <h3 style={{ fontSize: '18px', marginTop: '5px' }}>Men's Clothing</h3>
            <div className="box-con">
              <div className="box">
                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />

              </div>
              <div className="box">
                <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" />
              </div>
            </div>
            <div className="box-con">
              <div className="box">
                <img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="" />
              </div>
              <div className="box">
                <img src="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg" alt="" />
              </div>
            </div>
            <Link to="/Product">See more</Link>
          </div>
          <div className="card">
            <h3 style={{ fontSize: '18px', marginTop: '5px' }}>Keep shopping for</h3>
            <div className="box-con">
              <div className="box">
                <img src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg" alt="" />

              </div>
              <div className="box">
                <img src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" alt="" />
              </div>
            </div>
            <div className="box-con">
              <div className="box">
                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
              </div>
              <div className="box">
                <img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt="" />
              </div>
            </div>
            <Link to="/Product">See more</Link>
          </div>
          <div className="card">
            <h3 style={{ fontSize: '18px', marginTop: '5px' }}>Deals on smartphones</h3>
            <div className="box-con">
              <div className="box">
                <img src="https://m.media-amazon.com/images/I/61bUETZj9AL._AC_UY218_.jpg" alt="" />
              </div>
              <div className="box">
                <img src="https://m.media-amazon.com/images/I/71nj3tkXZXL._AC_UL320_.jpg" alt="" />
              </div>
            </div>
            <div className="box-con">
              <div className="box">
                <img src="https://m.media-amazon.com/images/I/81bh6SxXQ+L._AC_UL320_.jpg" alt="" />
              </div>
              <div className="box">
                <img src="https://m.media-amazon.com/images/I/51HnWtX7klL._AC_UY218_.jpg" alt="" />
              </div>
            </div>
            <Link to="/Mobile">See more</Link>
          </div>
          <div className="card">
            <h3 style={{ fontSize: '18px', marginTop: '5px' }}>Phones and Accessories</h3>
            <div className="box-con">
              <div className="box">
                <img src="https://images-eu.ssl-images-amazon.com/images/I/81WimZLWH1L._AC_UL232_SR232,232_.jpg" alt="" />

              </div>
              <div className="box">
                <img src="https://m.media-amazon.com/images/I/51oMWaW7tKL._AC_UL320_.jpg" alt="" />
              </div>
            </div>
            <div className="box-con">
              <div className="box">
                <img src="https://m.media-amazon.com/images/I/41zb0e965jL._AC_SR320,320_.jpg" alt="" />
              </div>
              <div className="box">
                <img src="https://m.media-amazon.com/images/I/41R51TjCz7L._AC_SR320,320_.jpg" alt="" />
              </div>
            </div>
            <Link to="/Mobile">See more</Link>
          </div>
        </div>

        <ProductCarousel title='Blockbuster deals' />
        <ProductCarousel title='Trending deals' />
        <div className="card-con">
          <div className="card">
            <h3 style={{ textAlign: 'center', fontSize: '18px', marginTop: '5px' }}>Men's clothing</h3>
            <div className="boxes">
              {mensCloths.map(menCloth => (
                <Link to={`/SingleProductPage/${menCloth.id}`}
                  className="box"
                  key={menCloth.id}>
                  <img src={menCloth.image} alt={menCloth.name} />
                </Link>
              ))}
            </div>

          </div>
          <div className="card">
            <h3 style={{ fontSize: '18px', marginTop: '5px' }}>Men's clothing</h3>
            <div className="box-con">
              <div className="box">
                <img src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg" alt="" />

              </div>
              <div className="box">
                <img src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" alt="" />
              </div>
            </div>
            <div className="box-con">
              <div className="box">
                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
              </div>
              <div className="box">
                <img src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt="" />
              </div>
            </div>
            <Link to="/Product">See more</Link>
          </div>
          <div className="card">
            <h3 style={{ fontSize: '18px', marginTop: '5px' }}>Mobile</h3>
            <div className="box-con">
              <div className="box">
                <img src="https://m.media-amazon.com/images/I/51HnWtX7klL._AC_UY218_.jpg" alt="" />
              </div>
              <div className="box">
                <img src="https://m.media-amazon.com/images/I/81itQPVn-GL._AC_UL320_.jpg" alt="" />
              </div>
            </div>
            <div className="box-con">
              <div className="box">
                <img src="https://m.media-amazon.com/images/I/81bh6SxXQ+L._AC_UL320_.jpg" alt="" />
              </div>
              <div className="box">
                <img src="https://m.media-amazon.com/images/I/51ZuW-0fiiL._AC_UY218_.jpg" alt="" />
              </div>
            </div>
            <Link to="/Mobile">See more</Link>
          </div>
          <div className="card">
            <h3 style={{ fontSize: '18px', marginTop: '5px' }}>Mobile</h3>
            <div className="box-con">
              <div className="box">
                <img src="https://m.media-amazon.com/images/I/51HnWtX7klL._AC_UY218_.jpg" alt="" />

              </div>
              <div className="box">
                <img src="https://m.media-amazon.com/images/I/81itQPVn-GL._AC_UL320_.jpg" alt="" />
              </div>
            </div>
            <div className="box-con">
              <div className="box">
                <img src="https://m.media-amazon.com/images/I/81bh6SxXQ+L._AC_UL320_.jpg" alt="" />
              </div>
              <div className="box">
                <img src="https://m.media-amazon.com/images/I/51ZuW-0fiiL._AC_UY218_.jpg" alt="" />
              </div>
            </div>
            <Link to="/Mobile">See more</Link>
          </div>
        </div>
        <ProductCarousel title='Trending deals' />
        <div className="center_img">
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/AmazonPay/JanART/Event-WTS_Creatives/Flight_GW_editorial_2300x646._CB584276567_.jpg" alt="" />
        </div>
        <SmartWatchCarousel title='Starting ₹999 | Bestselling smartwatches from top brands'/>
      </div>
      <br />
    </>
  );
};

export default Home;
