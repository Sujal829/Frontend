import axios from 'axios';
const BASE_URL = 'https://fakestoreapi.com/products';

export const getProductsAPI = async()=>{
    const response = await axios.get(BASE_URL);
    return response.data;
}

export const getProductByIdAPI = async(id)=>{
    const response = await axios.get(BASE_URL + '/' + id);
    return response.data;
}