import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='login-container'>
      <Link className="header">
        <div className="log">
          <p className='dot-in'>.in</p>
        </div>
      </Link>
      <form className='login-form'>
        <h3>Sign in</h3>
        <p htmlFor="">Email or mobile phone number </p>
        <input type="text" />
        <button type="submit" value="Continue" >Continue</button>
        <p>By continuing, you agree to Amazon's <span>Conditions of Use </span> and <span> Privacy Notice.</span></p>
        <div className="help">
          <i class="ri-arrow-right-s-fill"></i>
          <span>Need help?</span>
        </div>
        <p>Buying for work?</p>
        <p>Shop on Amazon Business</p>
      </form>
      
      <div className="newtoamazon">
      <span className='left-line'></span>
      <span className='text'>New to Amazon?</span>
      <span className='right-line'></span>
      </div>
     
     
    </div>
  )
}

export default Login