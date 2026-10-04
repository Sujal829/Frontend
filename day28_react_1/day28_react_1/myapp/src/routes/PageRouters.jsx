import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
const PageRouter =()=>{
    return(
        <BrowserRouter >
            <Routes>
                <Route path='/' Component={Login} />
            </Routes>
        </BrowserRouter>
    )
}

export default PageRouter;