import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from './firebase'; // Import Firebase auth
import './Registration.css'


const Registration = () => {
  const [clientName, setClientName] = useState("")
  const [clientEmail, setClientEmail] = useState("")
  const [clientPassword, setClientPassword] = useState("")

  const navigate = useNavigate()
  // client Error msg 
  const [clientNameErr, setClientNameErr] = useState("")
  const [clientEmailErr, setClientEmailErr] = useState("")
  const [clientPasswordErr, setClientPasswordErr] = useState("")

  const nameHandler = (e) => {
    setClientName(e.target.value);
    setClientNameErr("")
  }
  const numHandler = (e) => {
    setClientEmail(e.target.value)
    setClientEmailErr("")

  }
  const handlePassword = (e) => {
    setClientPassword(e.target.value)
    setClientPasswordErr('')
    return false;
  }

  // submit handler function 
  const handleRegistration = async (e) => {
    e.preventDefault();
    if (!clientName) {
      setClientNameErr("Enter your name.");
      return;
    }
    if (!clientEmail) {
      setClientEmailErr("Enter your mobile number.");
      return;
    }
    if (!clientPassword) {
      setClientPasswordErr("Enter your password.");
      return;
    } else {
      if (clientPassword.length < 6) {
        setClientPasswordErr("Passwords must be at least 6 characters.");
        return;
      }
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        clientEmail, // Use mobile number as email
        clientPassword
      );

      const user = userCredential.user;
      
      // Update the user's profile with the display name
      await updateProfile(user, {
        displayName: clientName // Setting the display name to clientName
      });

      console.log("User registered:", user);
      console.log("User registered:", userCredential.user);
      alert("User registered successfully!");
      setClientName("");
      setClientEmail("");
      setClientPassword("");
      navigate('/Login')
    } catch (error) {
      console.error("Error registering user:", error.message);
      setClientPasswordErr("Failed to register. Please try again.");
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
          <h3>Create Account</h3>

          <p>Your name </p>
          <input
            onChange={nameHandler}
            value={clientName}
            type="text"
            placeholder='First and last name' />
          {clientNameErr && (
            <p style={{ color: '#c40000', marginTop: '-10px' }}><span style={{ fontStyle: "italic", color: '#c40000', fontWeight: '900', fontSize: '12px' }}>!</span> {clientNameErr}</p>
          )}
          <p>Email Id</p>
          <input
            onChange={numHandler}
            value={clientEmail}
            required
            type="text"
            placeholder='Mobile Number' />
          {clientEmailErr && (
            <p style={{ color: '#c40000', marginTop: '-10px' }}><span style={{ fontStyle: "italic", color: '#c40000', fontWeight: '900', fontSize: '12px' }}>!</span> {clientEmailErr}</p>
          )}
          <p>Password</p>
          <input
            onChange={handlePassword}
            value={clientPassword}
            required
            type="Password"
            placeholder='At least 6 characters' />

          {clientPasswordErr && (
            <p style={{ color: '#c40000', marginTop: '-10px' }}><span style={{ fontStyle: "italic", color: '#c40000', fontWeight: '900', fontSize: '12px' }}>!</span> {clientPasswordErr}</p>
          )}
          {!clientPasswordErr && (
            <p className='passwordChar' style={{ fontStyle: 'italic', color: "#333", marginBottom: '20px' }}>
              <span style={{ color: "#70BAD5", fontWeight: "900", cursor: "default", fontSize: '14px' }}>i</span>
              <span style={{ color: "#333", fontWeight: "500", textDecoration: 'none', fontStyle: 'normal', cursor: "text", marginLeft: '8px' }} > Passwords must be at least 6 characters.</span>
            </p>
          )}
          <p>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.</p>
          <button type="submit" onClick={handleRegistration} >Verify Mobile Number</button>

          <p>Already have an account? <Link to="/Login"><span>Sign in</span><i className="ri-arrow-right-s-fill" style={{ color: '#333' }}></i></Link></p>

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