
import './PcList.css'
import { products } from './ProductData'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PcList = ({ cart, setCart }) => {


  const addToCart = (description, id, image, price, title) => {
    const obj = {
      description, id, image, price, title
    }
    setCart([...cart, obj])
    console.log(cart)
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

      <div className="result-product-grid">
        <ul style={{ padding: '25px' }}>
          {products.map(product => (
            <div
              className='item-box'
              key={product.id}>

              <Link
                to={`/SinglePc/${product.id}`}
                className="product-img">
                <img src={product.url} alt="product-image" />
              </Link>
              <h3>{product.title.shortTitle}</h3>

              <p className='price' style={{
                fontWeight: '200',
                color: '#333',
                textDecoration: 'line-through',
                opacity: '0.8'
              }}>₹ {product.price.mrp}</p>
              <p className='price'>₹ {product.price.cost}</p>
              <button
                onClick={() => addToCart(product.description, product.id, product.url, product.price.cost, product.title.shortTitle)}
              >Add to Cart</button>
            </div >
          ))}
        </ul></div>

    </>
  )
}

export default PcList