import { Link, MemoryRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Product from "./components/Product";
import Dashboard from "./components/Dashboard";
function MemoryRouterApp() {
  return (
    <MemoryRouter initialEntries={["/dashboard"]}>
        <nav style={{ display:'flex', flexDirection:'column'}}>

      <Link to="/products">Products</Link>
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dash</Link>
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </MemoryRouter>
  );
}

export default MemoryRouterApp;
