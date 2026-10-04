import { create } from "zustand";

const useProductStore = create((set)=>({
    products:[],
    laoding: false,
    fetchProducts: async()=>{
        set({laoding: true});

        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();

        set({
            products: data,
            laoding: false
        });
    }
}))

export default useProductStore;