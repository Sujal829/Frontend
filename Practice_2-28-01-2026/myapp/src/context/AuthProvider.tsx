import type React from "react";
import AuthContext from "./AuthContext";
import { useState } from "react";
import type { User } from "../types/authType";

type Props = {
    children: React.ReactNode;
}
export const AuthProvider=({ children }:Props)=>{
    const [user,setUser]=useState<User | null>(localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token') as string) : null);

    const login=(email:string,password:string): boolean=>{
        if(email==='admin@gmail.com' && password==='123456'){
            setUser({
                role:'Admin',
                email,
            })
            localStorage.setItem('token',JSON.stringify({
                role:'Admin',
                email,
            }));
            return true
        }
        if (email==='user@gmail.com' && password==='123456') {
            setUser({
                role:'User',
                email,
            })
            localStorage.setItem('token',JSON.stringify({
                role:'User',
                email,
            }));
            return true
            
        }
         if (email==='t@gmail.com' && password==='123456') {
            setUser({
                role:'Teacher',
                email,
            })
            localStorage.setItem('token',JSON.stringify({
                role:'Teacher',
                email,
            }));
            return true
            
        }
         if (email==='student@gmail.com' && password==='123456') {
            setUser({
                role:'student',
                email,
            })
            localStorage.setItem('token',JSON.stringify({
                role:'student',
                email,
            }));
            return true
            
        }
        localStorage.clear();
        return false;
    }

    const logout=()=> {
        setUser(null);
        localStorage.clear();
    };
    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}