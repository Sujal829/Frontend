import React from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom'
import {createBrowserHistory} from 'history';
import Home from './components/Home';
import Product from './components/Product';
import Dashboard from './components/Dashboard';
const history = createBrowserHistory();

function RouterApp() {
  return (
    <Router 
        location={history.location}
        navigator={history}
    >
    <nav style={{ display: "flex", flexDirection: "column" }}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>
      <button onClick={()=>history.push('/products')}>Go to products</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default RouterApp
