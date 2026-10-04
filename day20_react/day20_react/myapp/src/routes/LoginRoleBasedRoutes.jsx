import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Service from "../pages/Service";
import ContactUs from "../pages/ContactUs";
import NotFound from "../components/404";
import PrivateRoutes from "./PrivateRoutes";
import AccessDenied from "../pages/AccessDenied";
import Login from "../pages/Login";

function LoginRoleBasedRoutes() {
    const [isAuth, setIsAuth]= useState(false);
    const handleAuth=(flag)=>{
        setIsAuth(flag);
    }
  return <div>
     <BrowserRouter basename="/">
     {isAuth && <nav >
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
      </nav>}
      <Routes>
        <Route path="/" element={<Login action={handleAuth}/>} />
        <Route path="/login" element={<Login  action={handleAuth}/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/service" element={<PrivateRoutes isLoggedIn={isAuth}>
            <Service />
        </PrivateRoutes>} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/access-denied" Component={AccessDenied} />
        <Route path="*" Component={NotFound} />
      </Routes>
      
     </BrowserRouter>
  </div>
}

export default LoginRoleBasedRoutes;