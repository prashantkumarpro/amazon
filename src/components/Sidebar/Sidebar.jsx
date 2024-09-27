import { useEffect, useRef } from 'react'
import './Sidebar.css'
import { motion } from 'framer-motion'
import SidebarContent from '../SidebarContent/SidebarContent'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../Context/UserContext'

const Sidebar = ({ setSideBar, Sidebar }) => {

  let ref = useRef()
  const navigate = useNavigate();
  const { user, handleLogout } = useAuthContext();

  const handeleLogin = () => {
    navigate('/Login')
  }
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
        className='sidebar-container'
        ref={ref}
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: .2 }}>
        <div className="content">
          <div className="account">
            <i className="ri-account-circle-fill account-icon"></i>
            <h3>Hello, {user ? (
              <span>{user.displayName}</span>
            ) : (
              <Link to='/Login'>Login</Link>
            )} </h3>

          </div >
          <div className="sidebar-content-container">

            <SidebarContent
              setSideBar={setSideBar}
              title='Digital Content And Devices'
              one='Echo & Alexa'
              two='Kindle E-Readers & eBooks'
              three='Amazon Prime Video'
              four='Amazon Audiobooks' />
            <SidebarContent
              setSideBar={setSideBar}
              title='Shop By Category'
              one='Mobiles, Computers'
              two='TV, Appliances, Electronics'
              three="Men's Fashion"
              four="Women's Fashion" />
            <SidebarContent
              setSideBar={setSideBar}
              title='Programs & Features'
              one='Amazon Pay'
              two='Gift Cards & Mobile Recharges'
              three="Amazon Launchpad"
              four="Handloom and Handicrafts" />
            <div className='content-container'>
              {user ? (
                <h3>Welcome, {user.displayName},
                  <span
                    style={{ cursor: 'pointer' }}
                    onClick={handleLogout}> LogOut</span>
                </h3>
              ) : (
                <h3
                  onClick={handeleLogin}
                  style={{ cursor: 'pointer' }}> Login</h3>
              )}

            </div>
          </div>

        </div>

        <i className="ri-close-line close-sidebar" onClick={() => setSideBar(false)}></i>
      </motion.div>
    </>
  )
}

export default Sidebar

