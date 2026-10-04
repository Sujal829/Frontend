import { Link, Route, Routes } from 'react-router-dom'
import Product from './Product'
import Home from './Home'
import Dashboard from './Dashboard'

export default function StaticRouterApp() {
  return (
    <div>
        <nav style={{ display: "flex", flexDirection: "column" }}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>
        <Routes>

          <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/dashboard" element={<Dashboard />} />  
        </Routes>
    </div>
  )
}
