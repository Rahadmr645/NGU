import React, { useContext } from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';

const App = () => {

  return (
    <>
      <Navbar />
      {/* Router section */}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App