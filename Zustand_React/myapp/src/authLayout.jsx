import { Navigate, useNavigate } from "react-router-dom";
import useAuthStore from "./store/authStore"
import { useEffect } from "react";

const AuthLayout=({ children })=>{
    const token = useAuthStore(state=> state.token);
    const navigate = useNavigate();
    useEffect(()=>{
        if(token){
            navigate('/home')
        }

        if(!token) navigate('/')
    },[token]);

    return children
}

export default AuthLayout;