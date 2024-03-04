import React, { useState } from 'react'
import { Link, useLinkClickHandler } from 'react-router-dom'
import './Registration.css'


const Registration = () => {
  const [clientName, setClientName] = useState("")
  const [clientNum, setClientNum] = useState("")
  const [clientPassword, setClientPassword] = useState("")

  // client Error msg 
  const [clientNameErr, setClientNameErr] = useState("")
  const [clientNumErr, setClientNumErr] = useState("")
  const [clientPasswordErr, setClientPasswordErr] = useState("")

  const nameHandler = (e) => {
    setClientName(e.target.value);
    setClientNameErr("")
  }
  const numHandler = (e) => {
    setClientNum(e.target.value)
    setClientNumErr("")

  }
  const handlePassword = (e) => {
    setClientPassword(e.target.value)
    setClientPasswordErr('')
    return false;
  }

  // submit handler function 
  const handleRegistration = (e) => {
    e.preventDefault()
    if (!clientName) {
      setClientNameErr("Enter your name.")

    }
    if (!clientNum) {
      setClientNumErr("Enter your mobile number.")


    }
    if (!clientPassword) {
      setClientPasswordErr("Enter your password.")
 
    }else{
      if (clientPassword.length < 6) {
        setClientPasswordErr("Passwords must be at least 6 characters.")
        return false;
      }
    }
    if(clientName && clientNum && clientPassword){
       console.table(`clientName: ${clientName}, clietnNumber: ${clientNum}, clientPassword:${clientPassword}`)
       setClientName("")
       setClientNum("")
       setClientPassword("")
    }
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
            onChange={nameHandler}
            value={clientName}
            type="text"
            placeholder='First and last name' />
          {clientNameErr && (
            <p style={{ color: '#c40000', marginTop: '-10px' }}><span style={{ fontStyle: "italic", color: '#c40000', fontWeight: '900', fontSize: '12px' }}>!</span> {clientNameErr}</p>
          )}
          <p>Mobile number</p>
          <input
            onChange={numHandler}
            value={clientNum}
            type="text"
            placeholder='Mobile Number' />
          {clientNumErr && (
            <p style={{ color: '#c40000', marginTop: '-10px' }}><span style={{ fontStyle: "italic", color: '#c40000', fontWeight: '900', fontSize: '12px' }}>!</span> {clientNumErr}</p>
          )}
          <p>Password</p>
          <input
            onChange={handlePassword}
            value={clientPassword}
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

          <p>Already have an account? <Link to="/Login"><span>Sign in</span><i className="ri-arrow-right-s-fill" style={{color:'#333'}}></i></Link></p>

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