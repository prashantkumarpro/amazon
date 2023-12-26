import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function Layout({ setData, cart, data }) {



  return (
    <>
      <main style={{backgroundColor:'#E3E6E6'}}>

        <Navbar setData={setData} cart={cart} />
        <Outlet data={data} />
        <Footer />
      </main>
    </>
  )
}

export default Layout
