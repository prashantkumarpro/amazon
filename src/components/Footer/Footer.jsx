import React, { useEffect, useState } from 'react';
import './Footer.css'

const Footer = () => {


  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };







  return (
    <div className='footer-container'>
      <div id='backToTopBtn'
        className={`top ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
        style={{ display: isVisible ? 'block' : 'none' }}>
        <span>Back to Top</span>
      </div>
      <div className="middile">

        <div className="mdl_part">

          <div className="mdl_box">
            <h4>Get to know us</h4>
            <h3>About us</h3>
            <h3>Careers</h3>
            <h3>Press Releases</h3>
            <h3>Amazon Science</h3>
          </div>
          <div className="mdl_box">
            <h4>Contect with us</h4>
            <h3>Facebook</h3>
            <h3>Twitter</h3>
            <h3>Instagram</h3>
          </div>
          <div className="mdl_box">
            <h4>Make money with us</h4>
            <h3>Sell on Amazon</h3>
            <h3>Sell under Amazon Accelerator</h3>
            <h3>Protect and Build Your Brand</h3>
            <h3>Amazon Global Selling</h3>
            <h3>Become an Affiliate</h3>
            <h3>Fulfilment by Amazon</h3>
            <h3>Advertise Your Products</h3>
            <h3>Amazon Pay on Merchants</h3>
          </div>
          <div className="mdl_box">
            <h4>Let us help you</h4>
            <h3>COVID-19 and Amazon</h3>
            <h3>Your Account</h3>
            <h3>Returns Centre</h3>
            <h3>100% Purchase Protection</h3>
            <h3>Amazon App Download</h3>
            <h3>Help</h3>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Footer