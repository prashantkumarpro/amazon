import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";  // Firebase auth function
import { auth } from '../Registration/firebase';  // Import auth from your firebase.js

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // To redirect user after login





  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Plese enter both email and password')
      setError('Please enter both email and password');
      return;
    }
    {<p>Wait</p>}
    // Firebase login with email and password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successfully signed in
        const user = userCredential.user;
        // console.log('Logged in as:', user.email);
        navigate('/');  // Redirect to dashboard or homepage after login
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);  // Show error message to user
      });
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
          <p htmlFor="">Email </p>
          <input
            onChange={handleEmailChange}
            value={email}
            type="email"
            placeholder="coderbano@gmail.com us as email" />
          <p htmlFor="">Password </p>
          <input
            onChange={handlePasswordChange}
            value={password}
            type="text"
            required
            placeholder="Coder@123 us as password" />
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