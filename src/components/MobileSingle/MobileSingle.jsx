import React, { useEffect, useState } from 'react'
import './MobileSingle.css'
import { products } from '../ProductList/data'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom'
import { useAuthContext } from '../Context/UserContext';


const MobileSingle = ({ cart, setCart }) => {
    const [data, setData] = useState()
    const { MobileId } = useParams()
    const { user } = useAuthContext();
    const navigate = useNavigate();

    useEffect(() => {
        const singleData = products.filter(detail => detail.id == MobileId)
        setData(singleData[0]);
    }, [MobileId])

    const { description, id, image, price, title } = data || {};

    const addToCart = (description, id, image, price, title) => {

        const obj = { description, id, image, price, title }

        if (user) {
            setCart([...cart, obj])
            toast.success('item added!', {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else{
            navigate('/Login')
        }

    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            {data && <div className='singleMobile-product-con'>

                <div className="box">
                    <div className="product-img">
                        <img src={image} alt="product-image" />
                    </div>

                </div>
                <div className="product-des">
                    <h3>{title}</h3>
                    <p className='detail'>{description}</p>
                    <p className='price'>₹ {price}</p>
                    <button
                        onClick={() => addToCart(description, id, image, price, title)}
                    >Add to Cart</button>
                </div>
            </div>
            }

        </>
    )
}

export default MobileSingle