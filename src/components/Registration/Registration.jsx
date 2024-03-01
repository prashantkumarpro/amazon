import React, { useState } from 'react'
import { Link, useLinkClickHandler } from 'react-router-dom'
import './Registration.css'


const Registration = () => {
  const [clientName, setClientName] = useState("")
  const [clientNum, setClientNum] = useState("")
  const [clientPassword, setClientPassword] = useState("")

  // const [clientEmail, setClientEmail] = useState("")

  // client Error msg 
  const [clientNameErr, setClientNameErr] = useState("")
  const [clientNumErr, setClientNumErr] = useState("")
  const [clientPasswordErr, setClientPasswordErr] = useState("")


  const handlerFunction = (e) => {
    e.preventDefault()
    if (!clientName) {
      setClientNameErr("Please enter the name")
    } else {
      setClientNameErr("")
    }
    setClientName("")
    console.log(clientName)
  }
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
            onChange={(e) => setClientName(e.target.value)}
            type="text"
            placeholder='First and last name' />
          {clientNameErr && (
            <p>{clientNameErr}</p>
          )}
          <p>Mobile number</p>
          <input
            type="text"
            placeholder='Mobile Number' />
          <p className='error' style={{ display: 'none' }}>The mobile number you entered does not seem to be valid</p>

          <p>Password</p>
          <input
            type="Password"
            placeholder='At least 6 characters' />
          <p><span style={{
            fontStyle: 'italic', color: "#146bb6", fontWeight: "900",
            marginLeft: '-8px'
          }}>i</span> <span> Passwords must be at least 6 characters.</span></p>

          <p>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.</p>
          <button type="submit" onClick={handlerFunction} >Verify Mobile Number</button>

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