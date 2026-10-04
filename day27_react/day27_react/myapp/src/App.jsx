import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getProducts } from './services/productService'

function App() {
  useEffect(()=>{
    const fetchData=async()=>{
      const data = await getProducts();
      console.log(data);
      
    }
    fetchData();
  },[])
  return (
    <div>
      Hello
    </div>
  )
}

export default App
