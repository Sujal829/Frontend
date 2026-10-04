import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import ContactUs from "./pages/ContactUs";
import NotFound from "./components/404";

function BasicRoutes() {
  return <div>
     <BrowserRouter basename="/">
     <nav >
      <div style={{
        display:'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
        <Link to='/' >Home</Link>
        <Link to='/service' >Service</Link>
        <Link to='/contact' >ContactUs</Link>
      </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" Component={NotFound} />
      </Routes>
      
     </BrowserRouter>
  </div>
}

export default BasicRoutes;