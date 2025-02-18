import React, { useContext } from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import Login from './login/Login'
import { Context } from "./Context/StoreContext"
const App = () => {
const {showLogin} = useContext(Context)
  return (
    <>
      {showLogin?<Login/>:<></>}
      <Navbar />
      {/* Router section */}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App