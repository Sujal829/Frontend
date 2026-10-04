import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useAuthStore = create(devtools(persist((set)=>({
    user: null,
    token: null,
    login:  (email, password)=>{
        set({
            user:email,
            token: email
        })
    },
    logout: ()=> set({user: null, token: null})
}),{
    name: 'auth' // key in localstorage
})));

export default useAuthStore;