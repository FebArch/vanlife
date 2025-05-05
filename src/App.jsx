import { Routes, BrowserRouter, Link, Route } from "react-router-dom"

import Home from './pages/Home.page'
import About from './pages/About.page'
import Vans from './pages/Vans.page'
import Van from './pages/Van.page'

import Navbar from './components/Navbar'

import "./App.css"


export default function App(){

  return(
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<Van />} />
      </Routes>
    </BrowserRouter>
  )
}