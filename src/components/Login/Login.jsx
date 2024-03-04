import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
const Login = () => {

  const [inputValue, setInputValue] = useState('');


  //client Error msg 
  const [error, setError] = useState('');



  const handleEmailOrPhone = (event) => {
    setInputValue(event.target.value)

  }
  const handleLogin = (e) => {
    e.preventDefault()
    validateInput()
  }

  const validateInput = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^(?:\+\d{1,2}\s?)?\d{10,12}$/;

    if (emailRegex.test(inputValue) && mobileRegex.test(inputValue)) {
        setError('Invalid input: cannot contain both email address and mobile number');
    } else if (emailRegex.test(inputValue)) {
        setError('');
        alert('Correct email data');
        console.log(inputValue);
        setInputValue('');
    } else if (mobileRegex.test(inputValue)) {
        setError('');
        alert('Correct mobile data');
        console.log(inputValue);
        setInputValue('');
    } else {
        setError('Invalid email address or mobile number');
    }
};

  return (
    <div className='login-container'>
      <div className="header">
        <Link to="/" className="logo">
          <p className='dot-in'>.in</p>
        </Link>
      </div>
      <div className="form_container">
        <form className='login-form'>
          <h3>Sign in</h3>
          <p htmlFor="">Email or mobile phone number </p>
          <input
            onChange={handleEmailOrPhone}
            value={inputValue}
            type="text" />
          {error && (
            <p style={{ color: '#c40000', marginTop: '-10px' }}><span style={{ fontStyle: "italic", color: '#c40000', fontWeight: '900', fontSize: '12px' }}>!</span> {error}</p>
          )}
          <button type="submit" onClick={handleLogin} >Continue</button>
          <p>By continuing, you agree to Amazon's <span>Conditions of Use </span> and <span> Privacy Notice.</span></p>
          <div className="help">
            <i className="ri-arrow-right-s-fill"></i>
            <span>Need help?</span>
          </div>
          <p>Buying for work?</p>
          <p>Shop on Amazon Business</p>
        </form>
        <p className="newtoamazon">
          <span className='left-line'></span>
          <span className='text'>New to Amazon?</span>
          <span className='right-line'></span>
        </p>
        <div className="craete_account">
          <Link to="/Registration">Create your Amazon account</Link>
        </div>


      </div>
      <div className="bottom">
        <div className="part1">
          <span> Conditions of Use   Help </span>
          <span> Privacy Notice  </span>
          <span> Help   </span>
        </div>
        <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
      </div>

    </div>

  )
}

export default Login