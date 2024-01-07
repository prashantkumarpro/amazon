import React, { useState } from 'react'
import './Navbar.css'
import logo from './amazon_logo.png'
import flag from './indian_flag.png'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'


const Navbar = ({ cart }) => {


    const [query, setQuery] = useState('')
    const [sideBar, setSideBar] = useState(false)

    const navigte = useNavigate()

    const submitHendlar = (e) => {
        e.preventDefault()
        navigte(`/Result/${query}`)
        setQuery('')
    }

    const searchHendlar = () => {
        navigte(`/Result/${query}`)
        setQuery('')

    }

    const languages = ["EN", "हिन्दी", "தமிழ்", "मराठी"]

    const [displayData, setDisplayData] = useState(false)

    const languageHandler = () => {
        setDisplayData();
    }
    return (
        <>


            <nav>
                <div className='nav-part1'>
                    <div className="left">
                        <Link to="/" className="nav-logo border">
                            <img src={logo} alt="" />
                            <p>.in</p>
                        </Link>
                        <div className="nav-location border">
                            <div className="locatin-icon">
                                <i className="ri-map-pin-line"></i>
                            </div>
                            <div className="address">
                                <span className='line-1'>Divliver to Prashant</span>
                                <span className='line-2'>Purnia 853204</span>
                            </div>
                        </div>
                    </div>

                    <form
                        onSubmit={submitHendlar}
                        className="nav-search">
                        <select>
                            <option>All</option>
                        </select>

                        <input type="text"
                            value={query}
                            placeholder='Search Amazon.In'
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <div
                            onClick={searchHendlar}
                            className="search-box">
                            <i className="ri-search-line"></i>
                        </div>
                    </form>

                    <div className="right">
                        <div className="country border">
                            <div className="flag">
                                <img src={flag} alt="Indian_Flag" />
                            </div>
                            <select
                                className="lang_con"
                                onMouseEnter={languageHandler}>
                                {languages.map((lang, id) => {
                                    return (
                                        <option key={id}>{lang}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="account-types border">
                            <span className='line-1'>Hello,Prashant</span>
                            <select className='line-2'>
                                <option>Account & List type</option>
                            </select>
                        </div>

                        <div className="nav-order">
                            <span className='line-1'>Returns</span>
                            <span className='line-2'>& Oreder</span>
                        </div>
                        <Link
                            to="/Cart"
                            className="nav-cart border">
                            <span className="icon">
                                <div className="number-of-item">{cart.length}</div>
                                <i className="ri-shopping-cart-line"></i></span>
                            <span className='cart'></span>
                        </Link>
                    </div>

                </div>
            </nav>

            <div className="nav-part2">
                <div className="left border">
                    <i className="ri-menu-line" onClick={() => setSideBar(!sideBar)}></i>
                    <Link to="/Product">All</Link>
                </div>
                <div className="shop-container">
                    <ul className="shop-link">
                        <li className='border'> <Link to="/Mobile"> Mobile</Link></li>
                        <li className='border'> <Link to="prime"> Prime</Link></li>
                        <li className='border'> <Link> Prime</Link></li>
                        <li className='border' > <Link> Amazon miniTV</Link></li>
                        <li className='border'> <Link> Sell</Link></li>
                        <li className='border'> <Link> Amazon Pay</Link></li>
                        <li className='border'> <Link> Subscrive And Save</Link></li>
                        <li className='border'> <Link> Buy Again</Link></li>
                        <li className='border'> <Link> Cupon</Link></li>
                        <li className='border'> <Link> Gift Card</Link></li>
                    </ul>
                </div>
                <div className="right">
                    <ul className='right-con border'>
                        <li><Link>New Launches from Mobile,</Link></li>
                        <li><Link>Electronics & more</Link></li>
                    </ul>


                </div>
            </div>

          
            {sideBar && (
                <>
                    <Sidebar />
                   
                </>

            )}
        </>
    )
}

export default Navbar