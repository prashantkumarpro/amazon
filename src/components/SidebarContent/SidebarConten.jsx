import React from 'react'
import './SidebarContent.css'
// import { MobileList } from '../ProductList/MobileList';
import {useNavigate } from 'react-router-dom'


const SidebarConten = ({ title, one, two, three, four }) => {
    const navigate = useNavigate();
    const handleOnClick = (title, item) => {
        console.log(item)
        if(item.includes('Mobiles')){
            navigate('/Mobile')
        }
        
        };

    return (

        <div className='content-con'>
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

export default SidebarConten