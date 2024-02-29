import React from 'react'
import { Link } from 'react-router-dom'
import './Registration.css'
const Registration = () => {
  return (
    <div className='login-container'>
      <Link className="header">
        <div className="logo">
          <p className='dot-in'>.in</p>
        </div>
      </Link>
      <div className="form_container">
        <form className='login-form'>
          <h3>Create Account</h3>
          
          <p>Your name </p>
          <input type="text" placeholder='Enter Your name' />

          <p>Mobile number</p>
          <input type="Number" />
          <p className='error' style={{display:'none'}}>The mobile number you entered does not seem to be valid</p>

          <p>Password</p>
          <input type="Password" />
          <p>Passwords must be at least 6 characters.</p>

          <p>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.</p>
          <button type="submit" onClick={(e) => { e.preventDefault() }} >Verify Mobile Number</button>

          <p>Already have an account? <span>Sign in</span> <i className="ri-arrow-right-s-fill"></i></p>

          <p>Buying for work? <span>Create a free business account </span> <i className="ri-arrow-right-s-fill"></i></p>
          
           <p>By creating an account or logging in, you agree to Amazon’s<span> Conditions of Use </span>and<span> Privacy Policy.</span></p>
         
        </form>
       



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

export default Registration