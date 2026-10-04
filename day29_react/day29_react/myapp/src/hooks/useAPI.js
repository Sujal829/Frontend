import { useEffect, useState } from "react"

export const useAPI=(url, initialValue=null)=>{
    const [data, setData]=useState(initialValue);
    const [loading, setLoading]=useState(false);
    const [error, setError]=useState('');

    useEffect(()=>{
        const getData= async()=>{
            setLoading(true);
            try {     
                const result = await fetch(url);
                const res = await result.json()
                console.log(res);
                
                setData(res);
            } catch (error) {
                setError(error.message || 'Something went wrong!')
            } finally {
                setLoading(false)
            }
        }
        getData();
    },[url]);

    return {data, error, loading}
}