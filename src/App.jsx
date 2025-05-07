import React, { useContext, useState } from 'react'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import LoginPopup from './components/LoginPopup/LoginPopup'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import MyOrders from './pages/MyOrders/MyOrders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify/Verify'
import MessDisplay from './components/MessDisplay/MessDisplay'
import { StoreContext } from './Context/StoreContext'

const App = () => {

  const [showLogin,setShowLogin] = useState(false);
  const [showMess,setShowMess] = useState(true);
  const {mess} = useContext(StoreContext)

  return (
    // <div style={{
    //         backgroundColor: mess.primaryColor
    //       }}>
    <>
    <ToastContainer/>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}

      <div className='app'
        style={{
          backgroundColor: mess?.primaryColor? mess.primaryColor : "white"
        }}
      >
        <Navbar setShowLogin={setShowLogin} setShowMess={setShowMess} showMess = {showMess}/>
        {showMess?<MessDisplay setShowMess={setShowMess}/>:<></>}
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/order' element={<PlaceOrder />}/>
          <Route path='/myorders' element={<MyOrders />}/>
          <Route path='/verify' element={<Verify />}/>
        </Routes>
      </div>
      </>
      
    // </div>
  )
}

export default App
