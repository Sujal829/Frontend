import { useEffect, useState } from "react"
import { ProductContext } from "./ProductContext"
import Axios from 'axios';

export const ProductProvider=({children })=>{
const Base_Url = 'https://fakestoreapi.com/products';

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, seterror] = useState('');

    const getProducts=async()=>{
        setLoading(true);
        try {
            const res = await Axios.get(Base_Url);
            setProducts(res.data);
            seterror('');
        } catch (error) {
            seterror(error.message)
        }
    }

    useEffect(()=>{
        getProducts();
    }, [])

    const addProduct=()=>{

    }
    const updateProduct=()=>{
        
    }
    const deleteProduct=()=>{
        
    }
    
    return (
        <ProductContext.Provider value={{
            products,
            error,
            loading,
            addProduct,
            updateProduct,
            deleteProduct
        }}>
            {children}
        </ProductContext.Provider>
    )
}