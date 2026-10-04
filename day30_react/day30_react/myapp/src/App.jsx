import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ApiHook from './components/ApiHook'
import UserDetails from './components/UserDetails';

import './App.css'
import Controlled from './components/ControlledComponent';
import Login from './components/Login';
import Uncontrolled from './components/UncontrolledComponent';
import ControlledWithValidation from './components/ControlledWithValidation';
import UncontrolledValidation from './components/UncontrolledComponentValidation';
import FormikExample from './components/FormikExample';
import { ValidationSchemaExample } from './components/FormikValidation';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' Component={ApiHook } />
          <Route path='/login' Component={Login } />
          <Route path='/user/:id' Component={UserDetails} />
          <Route path='/cntrl' Component={Controlled} />
          <Route path='/cntrl-validation' Component={ControlledWithValidation} />
          <Route path='/uncntrl-validation' Component={UncontrolledValidation} />
          <Route path='/uncntrl' Component={Uncontrolled} />
          <Route path='/formik-example' Component={FormikExample} />
          <Route path='/formik-yup' Component={ValidationSchemaExample} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
