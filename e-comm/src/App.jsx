import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Productdetails from './pages/Productdetails'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Chatbot from './pages/Chatbot'
import Navbar from './components/Navbar' 

function App() {


  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/products/:id" element={<Productdetails/>} />
          <Route path="/chat" element={<Chatbot/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
