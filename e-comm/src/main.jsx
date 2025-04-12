import React, { StrictMode } from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from './context/CartContext';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    
  </React.StrictMode>
  )


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <CartProvider>
//       <App />
//     </CartProvider>

//   </StrictMode>,
// )
