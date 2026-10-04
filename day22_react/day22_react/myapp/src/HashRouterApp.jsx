import './App.css'
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';

const HashRouterApp=()=>{
  return(
    <HashRouter>
      <nav style={{display:'flex', flexDirection:'column'}}>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
      </nav>
      <Routes>
        <Route path='/' Component={Home}/>

        <Route path='/products' Component={Product}/>
      </Routes>
    </HashRouter>
  )
}

export default HashRouterApp