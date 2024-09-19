import React, { useEffect, useState } from 'react'
import './Cart.css'
import { Link } from 'react-router-dom'

const Cart = ({ cart, setCart }) => {
    const [totalAmount, setTotalAmount] = useState()
   
    const handleBuyAllBtn = ()=>{
        alert('This service is under maintenance')
    }

    const totalCartAmount = () => {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total = total + cart[i].price;

        }
        setTotalAmount(total.toFixed(0));

    }

    useEffect(() => {
        totalCartAmount();
    }, [cart]);


    return (
        <>
            {cart.length > 0 ? (
                <div className="cart_container">
                    <div className='shopping_cart_box'>
                        <ul>
                            <div className="heading">
                                <h1>Shopping Cart</h1>
                                <p>price</p>
                            </div>
                            {cart.map(item => (
                                <li
                                    style={{ width: '96%', borderBottom: '1px solid lightGray', height: '240px', margin: '0 auto' }}
                                    key={item.id}>
                                    <div className="container">
                                        <div className="product-img">
                                            <img src={item.image} alt="product-image" />
                                            {/* <i class="ri-delete-bin-5-line"></i> */}
                                        </div>
                                        <div className='box'>
                                            <div className='box_heading'>
                                                <p>{item.description}</p>
                                                <p className='price' style={{ fontSize: '20px', fontWeight: '200' }}>₹ {item.price.toFixed(0)}</p>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </li>

                            ))}
                        </ul>
                    </div>

                    <div className='total_amount'>
                        <h3>Subtotal ({cart.length}): ₹ {totalAmount}</h3>
                        <button 
                        onClick={handleBuyAllBtn}
                        className='buy_btn'>Proceed to Buy</button>

                        <div className="buttons">
                            <button
                                onClick={() => setCart('')}
                                style={{ backgroundColor: 'red', color: "white" }}
                            >Clear Cart</button>
                        </div>
                    </div>

                </div>) : (
                <>
                    <div className="empty-cart-con">
                        <h3>Empty Cart</h3>
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