import React, { useEffect, useState } from 'react'
import { products } from './ProductData'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SinglePc = ({ cart, setCart }) => {
    const [data, setData] = useState()
    const { SinglePcId } = useParams()

    useEffect(() => {
        const singleData = products.filter(detail => detail.id == SinglePcId)
        setData(singleData[0]);
    }, [SinglePcId])

    const { description, id, url, price, title } = data || {};


    const addToCart = (description, id, image, price, title) => {

        const obj = { description, id, image, price, title }

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
            {data && <div
                key={id}
                className='singleMobile-product-con'>

                <div className="box">
                    <div className="product-img">
                        <img src={url} alt="product-image" />
                    </div>

                </div>
                <div className="product-des">
                    <h3>{title.shortTitle}</h3>
                    <p className='detail'>{description}</p>
                    <p className='price'>₹ {price.cost}</p>
                    <button
                        onClick={() => addToCart(description, id, url, price.cost, title)}
                    >Add to Cart</button>
                </div>
            </div>
            }

        </>
    )
}

export default SinglePc