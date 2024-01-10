import React from 'react'
import './SidebarContent.css'
import { Link } from 'react-router-dom';

const handleOnClick = (title, item) => {
    console.log(`Clicked on ${title}: ${item}`);
    // Add your custom logic here
  
  };
const SidebarConten = ({ title, one, two, three, four }) => {
    let strings = one;
    let myArray = one.split(" ");
    let word = myArray[2]
    // console.log(myArray)
    console.log(myArray[0])
    return (

        <div className='content-con'>
            <h3>{title}</h3>
            <ul>
                <li onClick={() => handleOnClick(title, one)}>{one}<span><i className="ri-arrow-right-s-line"></i></span></li>
                <li  onClick={() => handleOnClick(title, two)}>{two} <span><i className="ri-arrow-right-s-line"></i></span></li>
                <li  onClick={() => handleOnClick(title, three)}>{three}<span><i className="ri-arrow-right-s-line"></i></span></li>
                <li  onClick={() => handleOnClick(title, four)}>{four}<span><i className="ri-arrow-right-s-line"></i></span></li>
            </ul>
        </div>

    )
}

export default SidebarConten