import React from 'react';
import './Home.css';
import { useDataContext } from '../Context/ProductContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { isLoading, mensCloths } = useDataContext();


  return (
    <>

      <div className='home-container'>
      {(isLoading) ? <h2 style={{
        textAlign: 'center',
        margin: '20px',
        zIndex: '999'
      }}> Loading</h2> : ''}
      
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
        <div className="card">box2</div>
        <div className="card">box3</div>
      </div>
      </div>

    


    </>
  );
};

export default Home;
