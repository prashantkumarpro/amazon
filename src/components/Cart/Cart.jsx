import React from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'
const Cart = ({ cart, setCart }) => {



    return (
        <>
            {cart.length > 0 ? (<div className="cart-con">
                <ul>
                    {cart.map(item => (
                        <li key={item.id}>
                            <div className="container">
                                <div className="product-img">
                                    <img src={item.imageUrl} alt="product-image" />
                                </div>
                                <div className='box'>
                                    <p>{item.details}</p>
                                    <p className='price' style={{ fontSize: '25px', fontWeight: '700' }}>₹ {item.price}</p>
                                    <button>Add to Wishlist</button>
                                    <button>Buy Now</button>
                                </div >

                            </div>
                        </li>

                    ))}
                </ul>

                <div className="buttons">
                    <button>Check Out</button>
                    <button
                        onClick={() => setCart('')}
                        style={{ backgroundColor: 'red', color: "white" }}
                    >Clear Cart</button>
                </div>
            </div>) : (
                <>
                    <div className="empty-cart-con">
                        <h3>Epty Cart</h3>
                        <Link
                            className='continue-shopping'
                            to={'/Mobile'}
                            style={{
                                color: "#F3A847",
                                fontSize: '25px',
                                marginTop: '25px'
                            }}> Countinue Shopping </Link>
                    </div>

                </>
            )}

        </>
    )
}

export default Cart