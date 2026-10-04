import { useContext } from 'react';
import {Navigate } from 'react-router-dom';
import AuthContext from '../context/Context';

function PrivateRoute({ children }) {
    const { user } = useContext(AuthContext);
    return user?.token ? children : <Navigate to='/login' replace/>
}

export default PrivateRoute;
