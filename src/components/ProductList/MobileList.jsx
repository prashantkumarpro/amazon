import React, { useEffect, useState } from 'react'
import './MobileList.css'
import { products } from './data';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const MobileList = ({ cart, setCart }) => {

    const [data, setData] = useState(products)
    const [searchQuery, setSearchQuery] = useState('')
    const [brandName, setBrandName] = useState('')
    const [filterAmount, setFilterAmount] = useState(null)
    const [filterColer, setFilterColor] = useState('')


    useEffect(() => {

        if (searchQuery) {
            // serach products by their name and title 
            const filteredQuery = products.filter((product) =>
                product.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
            );
            setData(() => filteredQuery);

        } else if (brandName) {
            // filter by brand name
            const filteredBrandData = products.filter((product) => product.brand === brandName);
            setData(() => filteredBrandData);

        } else if (filterAmount) {
            // filter by amount 
            const filterdeAmount = products.filter((amount) => filterAmount.min <= amount.price && amount.price <= filterAmount.max);
            setData(() => filterdeAmount)
        } else if (filterColer) {
            // filter by color
            const filteredColor = products.filter((product) => product.color === filterColer);
            setData(() => filteredColor)
          
        } else {

            setData(() => products)
        }


    }, [brandName, products, filterAmount, filterColer, searchQuery])

    const addToCart = (id, title, price, image, description) => {
        const obj = {
            id, title, price, image, description
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
        <section className='mobile-section'>
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



            <div className="grid">

                <div className="filter-page">
                    <div className="filter-box">
                        <label>
                            <input
                                type="text"
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder='Search here...'
                                value={searchQuery}
                            />
                        </label>
                    </div>
                    <h3>Category</h3>
                    <div className="brand">
                        <h3>Brand</h3>
                        <div className="brand-con">
                            <div className="brand-name hover" onClick={() => setBrandName('')}>All</div>
                            <div className="brand-name hover"
                                onClick={() => setBrandName('Redmi')}>Redmi
                            </div>
                            <div className="brand-name hover" onClick={() => setBrandName('POCO')}>Poco</div>
                            <div className="brand-name hover" onClick={() => setBrandName('Motorola')}>Motorola </div>
                            <div className="brand-name hover" onClick={() => setBrandName('Samsung')}>Samsung</div>

                        </div>
                    </div>

                    <div className="price-filter">
                        <h3>Price</h3>
                        <div className="price hover"
                            onClick={() => setFilterAmount(null)}>All</div>
                        <div className="price hover"
                            onClick={() => setFilterAmount({ min: 0, max: 1000 })}>Under ₹1,000</div>
                        <div className="price hover" onClick={() => setFilterAmount({ min: 1000, max: 5000 })}>₹1,000 - ₹5,000 </div>
                        <div className="price hover" onClick={() => setFilterAmount({ min: 5000, max: 10000 })}> ₹5,000 - ₹10,000</div>
                        <div className="price hover" onClick={() => setFilterAmount({ min: 10000, max: 20000 })}> ₹10,000 - ₹20,000</div>
                        <div className="price hover" onClick={() => setFilterAmount({ min: 20000, max: Infinity })}>Over ₹20,000</div>
                    </div>

                    <div className="color-filter">
                        <h3>Color</h3>
                        <div className="hover" onClick={() => setFilterColor('')}>All</div>
                        <div className="color-box">
                            <div className="box" style={{ backgroundColor: 'blue' }} onClick={() => setFilterColor('Blue')} ></div>
                            <div className="box" style={{ backgroundColor: 'Black' }} onClick={() => setFilterColor('Black')}  ></div>
                            <div className="box" style={{ backgroundColor: 'green' }} onClick={() => setFilterColor('Green')}  ></div>
                            <div className="box" style={{ backgroundColor: 'silver' }} onClick={() => setFilterColor('Silver')}></div>
                        </div>
                    </div>

                </div>

                <div className="product-grid">
                    <ul>
                        {data.map(product => (
                            <div className='box'
                                key={product.id}>
                                <Link
                                    to={`/MobileSingle/${product.id}`}
                                    className="product-img">

                                    <img src={product.image} alt="product-image" />
                                </Link>
                                <div className="product-ditels"></div>
                                <h3>{product.name}</h3>
                                <p className='price'>₹ {product.price}</p>
                                <button
                                    onClick={() => addToCart(product.id, product.title, product.price, product.image, product.description)}
                                >Add to Cart</button>
                            </div >
                        ))}

                    </ul>
                </div>



            </div>
        </section>
    )
}







