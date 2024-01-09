import { useEffect, useRef } from 'react'
import './Sidebar.css'
import { motion } from 'framer-motion'
import SidebarConten from '../SidebarContent/SidebarConten'

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
          <div className="sidebar-content-con">

            <SidebarConten
              title='Digital Content And Devices'
              one='Echo & Alexa'
              two='Kindle E-Readers & eBooks'
              three='Amazon Prime Video'
              four='Amazon Audiobooks' />
            <SidebarConten
              title='Shop By Category'
              one='Mobiles, Computers'
              two='TV, Appliances, Electronics'
              three="Men's Fashion"
              four="Women's Fashion" />
            <SidebarConten
              title='Programs & Features'
              one='Amazon Pay'
              two='Gift Cards & Mobile Recharges'
              three="Amazon Launchpad"
              four="Handloom and Handicrafts" />

          </div>

        </div>

        <i className="ri-close-line close-sidebar" onClick={() => setSideBar(false)}></i>
      </motion.div>
    </>
  )
}

export default Sidebar

