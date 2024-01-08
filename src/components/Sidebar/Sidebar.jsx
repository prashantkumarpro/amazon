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
        ref={ref}
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: .2 }}
        className='sidebar-con'>
        <div className="content">
          <div className="account">
            <i class="ri-account-circle-fill account-icon"></i>
            <p>Hello, Sign In</p>
          </div>
        </div>
        <i className="ri-close-fill close-sidebar" onClick={() => setSideBar(false)}></i>
      </motion.div>
    </>
  )
}

export default Sidebar