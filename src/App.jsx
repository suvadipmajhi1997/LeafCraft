import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Index from './components/Pages/Index'
import About from './components/Pages/About'
import Shop from './components/Pages/Shop'
import Blog from './components/Pages/Blog'
import Wishlist from './components/Pages/Wishlist'
import Contact from './components/Pages/Contact'
import Footer from './components/Footer/Footer'
import Carts from './components/Pages/Carts'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Checkout from './components/Pages/Checkout'

function App() {

  return (
    <>
     <Nav/>
     <ToastContainer position='top-right' autoClose={2000}/>
     <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/cart' element={<Carts/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
