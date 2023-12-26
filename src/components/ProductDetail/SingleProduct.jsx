import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { products } from '../ProductList/data'
import './SingleProduct.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SingleProduct = ({ cart, setCart }) => {
    const { id } = useParams()
  
    const [product, setProduct] = useState({})

    const [relatedProduct, setRelatedProduct] = useState([])




    useEffect(() => {

        // single product
        const filterProduct = products.filter((product) => product.id == id)
        // console.log(filterProduct)
        setProduct(filterProduct[0])

        // filter product by brand name
        const filterBrandName = products.filter((brandName) => brandName.brand === product.brand)
        // console.log(filterBrandName)
        setRelatedProduct(filterBrandName)


    }, [id, product.brand])

    const addToCart = (id, title, price, imageUrl, details) => {
        const obj = {
            id, title, price, imageUrl, details
        }
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
            <div className='product-con'>
                <div className="box">
                    <div className="product-img">
                        <img src={product.imageUrl} alt="product-image" />
                    </div>

                </div>
                <div className="product-des">
                    <h3>{product.name}</h3>
                    <p className='detail'>{product.details}</p>
                    <p className='price'>₹ {product.price}</p>
                    <button
                        onClick={() => addToCart(product.id, product.title, product.price, product.imageUrl, product.details)}
                    >Add to Cart</button>
                </div>
            </div>



            <div className="product-grid">
                <h2 className='same-brands'>Same Mobiles Brand</h2>
                <ul>
                    {relatedProduct.map(product => (
                        <div
                            className='box'
                            key={product.id}>
                            <Link
                                to={`/SingleProduct/${product.id}`}
                                className="product-img">
                                <img src={product.imageUrl} alt="product-image" />
                            </Link>
                            <h3>{product.name}</h3>

                            <p className='price'>₹ {product.price}</p>
                            <button
                                onClick={() => addToCart(product.id, product.title, product.price, product.imageUrl, product.details)}
                            >Add to Cart</button>
                        </div >
                    ))}</ul></div>
        </>

    )
}

export default SingleProduct