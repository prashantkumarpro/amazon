import React from 'react'
import './SidebarContent.css'
import { useNavigate } from 'react-router-dom'


const SidebarContent = ({ title, one, two, three, four, setSideBar }) => {
    const navigate = useNavigate();

    const handleOnClick = (title, item) => {

        if (item.toLowerCase().includes('mobiles, computers')) {
            navigate('Mobile')
            setSideBar(false)
        }
        else if (item.toLowerCase().includes("men's fashion") || item.toLowerCase().includes("Women's Fashion")) {
            navigate('/Product')
            setSideBar(false)
        }

    };


    return (

        <div className='content-container'>
            <h3>{title}</h3>
            <ul>
                <li onClick={() => handleOnClick(title, one)}>{one}<span><i className="ri-arrow-right-s-line"></i></span></li>
                <li onClick={() => handleOnClick(title, two)}>{two} <span><i className="ri-arrow-right-s-line"></i></span></li>
                <li onClick={() => handleOnClick(title, three)}>{three}<span><i className="ri-arrow-right-s-line"></i></span></li>
                <li onClick={() => handleOnClick(title, four)}>{four}<span><i className="ri-arrow-right-s-line"></i></span></li>
            </ul>
        </div>

    )
}

export default SidebarContent