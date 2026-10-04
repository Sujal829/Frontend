import { useEffect, useState } from "react";
import axios from 'axios';

import ApiContext from "./ApiContext";

export const ApiProvider=({ children }) =>{
    const BaserUrl = 'https://jsonplaceholder.typicode.com/posts';

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const getAllPosts = async()=>{
        setLoading(true);
        try {
            const res = await axios.get(BaserUrl);
            console.log(res);
            setData(res.data);
            setError(null);
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false);
        }
    }

    const createPost =async(newPost)=>{
        setLoading(true);
        try {
            const res = await axios.post(BaserUrl, newPost);
            let __data = res.data;
            __data = {...__data, id: data[0].id + 1}
            setData((prev)=> [__data, ...prev]);

            // const copy = [...data];
            // copy.unshift(res.data);
            // setData(copy);
            setError(null);
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false);
        }
    }

     const updatePost =async(id, updatedPost)=>{
        setLoading(true);
        try {
            const res = await axios.put(`${BaserUrl}/${id}`, updatedPost);
            // setData()
            setError(null);
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false);
        }
    }
    
    const patchPost =async(id, partialData)=>{
        setLoading(true);
        try {
            const res = await axios.patch(`${BaserUrl}/${id}`, partialData);
            // setData()
            setError(null);
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false);
        }
    }

    const deletePost =async(id)=>{
        setLoading(true);
        try {
            await axios.delete(`${BaserUrl}/${id}`);
            setData(prev=> prev.filter(d => d.id != id));
            setError(null);
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{
        getAllPosts(); 
    },[]);

    return (
        <ApiContext.Provider value={{
            data,
            loading,
            error,
            getAllPosts,
            createPost,
            updatePost,
            patchPost,
            deletePost
        }}>
            {children}
        </ApiContext.Provider>
    )
}
