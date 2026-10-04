import "./App.css";
import {
  unstable_HistoryRouter as HistoryRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from "./components/Home";
import Product from "./components/Product";
import Dashboard from "./components/Dashboard";

const history = createBrowserHistory();

function HistoryRouterApp() {
    const handlNavigation=()=>{
        history.push({
            pathname: '/dashboard',
            search:'newkey'
        })
    }
  return (
    <HistoryRouter history={history}>
      <nav style={{ display: "flex", flexDirection: "column" }}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>
      <button onClick={handlNavigation}>Go to dashboard (outside react)</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </HistoryRouter>
  );
}

export default HistoryRouterApp;
