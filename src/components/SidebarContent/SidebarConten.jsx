import React from 'react'
import './SidebarContent.css'
const SidebarConten = ({ title, one, two, three, four }) => {
    return (

        <div className='content-con'>
            <h3>{title}</h3>
            <ul>
                <li>{one}<span><i className="ri-arrow-right-s-line"></i></span></li>
                <li>{two} <span><i className="ri-arrow-right-s-line"></i></span></li>
                <li>{three}<span><i className="ri-arrow-right-s-line"></i></span></li>
                <li>{four}<span><i className="ri-arrow-right-s-line"></i></span></li>
            </ul>
        </div>

    )
}

export default SidebarConten