import { type JSX } from "react"
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface Props{
    children: JSX.Element,
    roles?: string[]
}
const ProtectedRoute = ({ children, roles}: Props) => {
    const { user } = useAuth();
    if(!user) return  <Navigate to='/login' replace />;
  return  roles?.includes(user.role.toLowerCase())?children:<Navigate to='/unauthorized' replace />;
}

export default ProtectedRoute;