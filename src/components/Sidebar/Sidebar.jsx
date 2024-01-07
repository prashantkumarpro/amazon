import React, { useState } from 'react'
import './Sidebar.css'
// const [closeNav, setCloseNav] = useState(false)

const closeNavHandlar = () => {
  document.querySelector('.sidebar-con').style.display = 'none'
}
const Sidebar = () => {
  return (
    <>
      <div className='sidebar-con'>
        <i className="ri-close-fill" onClick={closeNavHandlar}></i>
      </div>

    </>
  )
}

export default Sidebar