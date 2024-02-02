import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./pages/layout/Layout"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Canvas from "./pages/canvas/Canvas"
import Exhibit from "./pages/exhibit/Exhibit"
import Merch from "./pages/merch/Merch"
import Collectibles from "./pages/collectibles/Collectibles"
import Contact from "./pages/contact/Contact"
import ArtPage from "./pages/artpage/ArtPage"
import CustomerInfo from "./pages/customer/CustomerInfo"

function CodeArt() {
    return(
    <React.Fragment>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" index element={<Home/>} />
                    <Route path="/about" element={<About/>}/>
                    <Route path="/canvas" element={<Canvas/>}/>
                    <Route path="/exhibit" element={<Exhibit/>}/>
                    <Route path="/collectibles" element={<Collectibles/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/merch" element={<Merch/>}/>
                    <Route path="/:id" element={<ArtPage/>}/>
                    <Route path="customerdetails" element={<CustomerInfo/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.Fragment>
  )
}

export default CodeArt