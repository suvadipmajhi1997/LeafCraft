import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import WishlistContextProvider from './components/WishlistContextProvider.jsx'
import CartContextProvider from './components/CartContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <WishlistContextProvider>
    <CartContextProvider>
    <App />
    </CartContextProvider>
    </WishlistContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
