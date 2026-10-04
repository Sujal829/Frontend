import { useState } from "react"
import AuthContext from "./Context";

export const AuthProvider=({ children })=>{
    const [user, setUser] = useState({
        role: localStorage.getItem('role'),
        token: localStorage.getItem('token')
    });


    const login=(token, role)=>{
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
        setUser({role, token});
    }

    const logout=()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user,login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}