import { Routes, BrowserRouter, Link, Route } from "react-router-dom"

import HomePage from './pages/Home.page'
import AboutPage from './pages/About.page'

import HostPage from './pages/Host.page'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages//Host/Income'
import Reviews from "./pages//Host/Reviews"
import HostVans from './pages/Host/HostVans'
import HostVanDetailedPageLayout from './pages/Host/HostVanDetailedPageLayout'

import HostVanDetailedPageDetails from './components/HostVanDetailedPageDetails'
import HostVanDetailedPagePricing from './components/HostVanDetailedPagePricing'
import HostVanDetailedPagePhotos from './components/HostVanDetailedPagePhotos'

import VansPage from './pages/Vans.page'
import VanPage from './pages/Van.page'

import Layout from './components/Layout'

import "./App.css"


export default function App() {

  return (

    <BrowserRouter>
      {/* <Navbar />   rendering the navbar here seems ugly!!! */}
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<HomePage />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>

          <Route path='/host' element={<HostPage />} >
            
            <Route index element={<Dashboard />} />   {/* path="" or index remains same think so!  */ }
            <Route path="income" element={<Income />} />
            
            <Route path="vans" element={<HostVans />} />
            <Route path={"vans/:id"} element={<HostVanDetailedPageLayout />} >

              <Route index element={<HostVanDetailedPageDetails />} /> 
              <Route path="pricing" element={<HostVanDetailedPagePricing />} />
              <Route path="photos" element={<HostVanDetailedPagePhotos />} />

            </Route>


            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="/vans" element={<VansPage />} />
          <Route path="vans/:id" element={<VanPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}