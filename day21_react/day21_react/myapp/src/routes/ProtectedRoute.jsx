import { useContext } from "react"
import AuthContext from "../context/Context"
import { Navigate } from "react-router-dom";

const ProtectedRoute=({children, role})=>{
    const { user } = useContext(AuthContext);
    const isAccess = role.includes(user?.role?.toLowerCase()) || false;
    if(!user || !isAccess){
        return <Navigate to='/unauthorized' replace />
    }
    return children
}

export default ProtectedRoute;