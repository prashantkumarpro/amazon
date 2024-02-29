import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='login-container'>
      <Link className="header">
        <div className="logo">
          <p className='dot-in'>.in</p>
        </div>
      </Link>
      <div className="form_container">
        <form className='login-form'>
          <h3>Sign in</h3>
          <p htmlFor="">Email or mobile phone number </p>
          <input type="text" />
          <button type="submit" onClick={(e) => { e.preventDefault() }} >Continue</button>
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