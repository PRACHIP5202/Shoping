import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Productdetails from './pages/Productdetails'
import Home from './pages/Home'
import CartPage from './pages/CartPage'
import Chatbot from './pages/Chatbot'
import Navbar from './components/Navbar' 

function App() {


  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/products/:id" element={<Productdetails/>} />
          <Route path="/chat" element={<Chatbot/>} /> 
        </Routes>
    </div>
  )
}

export default App
