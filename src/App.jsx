import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from './context/CartContext';
import Checkout from './components/Checkout/Checkout';
import { ToastContainer } from 'react-toastify';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import DetailPage from './pages/DetailPage';
import ContactPage from './pages/ContactPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import CheckoutPage from './pages/CheckoutPage';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <ToastContainer autoClose={2500}/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:idCategory" element={<CategoriesPage />} />
          <Route path="/detail/:idProduct" element={<DetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App