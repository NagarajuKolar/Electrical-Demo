import { Routes, Route } from 'react-router-dom';
 import './App.css'
import Navbar from './Components/Navbar'
import viteLogo from '/vite.svg'
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';
import Footer from './Components/Footer';
import Products from './Components/Products';
import Cabletrays from './Components/Cabletrays';
import Earthing from './Components/Earthing';
import Lightpolings from './Components/Lightpolings';
import Gratings from './Components/gratings'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<Aboutus />}></Route>
        <Route path='/contact' element={<Contactus />}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/cabletrays' element={<Cabletrays/>}></Route>
         <Route path='/earthmaterial' element={<Earthing/>}></Route>
         <Route path='/lightpolings' element={<Lightpolings/>}></Route>
        <Route path='/gratings' element={<Gratings/>}></Route>
      </Routes>
      <Footer />



    </>
  )
}

export default App
