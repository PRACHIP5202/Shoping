import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Productdetails from './pages/Productdetails'
import Home from './pages/Home'
import CartPage from './pages/CartPage'
import Chatbot from './pages/Chatbot'
import Navbar from './components/Navbar' 
import CheckoutPage from './pages/CheckoutPage'
import SuccessPage from './pages/SuccessPage'
import { CartProvider } from './context/CartContext'
import OrdersDashboard from './pages/OrderDashBoard'
function App() {


  return (

        <CartProvider>  
          <Navbar />
          <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/products/:id" element={<Productdetails/>} />
          <Route path="/chat" element={<Chatbot/>} /> 
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/dashboard" element={<OrdersDashboard />} />
          </Routes>
        </CartProvider>
       
  )
}

export default App
