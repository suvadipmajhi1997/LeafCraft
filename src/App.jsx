import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Index from './components/Pages/Index'
import About from './components/Pages/About'
import Shop from './components/Pages/Shop'
import Blog from './components/Pages/Blog'
import Contact from './components/Pages/Contact'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
     <Nav/>
     <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
     <Footer/>
    </>
  )
}

export default App
