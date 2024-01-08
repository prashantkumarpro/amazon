import { useEffect, useRef } from 'react'
import './Sidebar.css'
import { motion } from 'framer-motion'

const Sidebar = ({ setSideBar, Sidebar }) => {
  let ref = useRef()
  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      if (e.target.contains(ref.current)) {
        setSideBar(false)
      }
    })

  }, [Sidebar, ref])

  return (
    <>
      <motion.div
        className='sidebar-con'
        ref={ref}
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: .2 }}>
        <div className="content">
          <div className="account">
            <i className="ri-account-circle-fill account-icon"></i>
            <h3>Hello, Sign In</h3>
          </div>
          <div className='content-details'>
            <h3 style={{marginBottom:'10px', padding:"0 6px"}}>Digital Content And Devices</h3>
            <ul className='links'>
              <li>Echo & Alexa <span><i class="ri-arrow-right-s-line"></i></span></li>
              <li>Echo & Alexa <span><i class="ri-arrow-right-s-line"></i></span></li>
              <li>Echo & Alexa <span><i class="ri-arrow-right-s-line"></i></span></li>
            </ul>
          </div>
        </div>

        <i className="ri-close-fill close-sidebar" onClick={() => setSideBar(false)}></i>
      </motion.div>
    </>
  )
}

export default Sidebar