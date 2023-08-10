/* eslint-disable no-unused-vars */
import React from "react"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home />} />
        {/* <Route  path="/login" element={<Login />} />
        <Route  path="/setAvatar" element={<SetAvatar />} />
        <Route  path="/" element={<Chat />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
