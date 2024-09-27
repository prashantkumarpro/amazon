import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import { AuthProvider } from './components/Context/UserContext';


function Layout({ setData, cart, data }) {

  return (
    <AuthProvider>


      <Navbar setData={setData} cart={cart} />
      <main style={{ backgroundColor: '#E3E6E6' }}>

        <Outlet data={data} />
      </main>
      <Footer />

    </AuthProvider>
  )
}

export default Layout
