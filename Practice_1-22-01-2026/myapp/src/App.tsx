import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import { AuthProvider } from './context/AuthProvider'
import UnAuthorized from './components/UnAuthorized'
import Dashboard from './components/Dashboard'
import AdminPage from './components/AdminPage'
import PrivateRoute from './routes/PrivateRoute'
import ProtectedRoute from './routes/ProtectedRoute'
import Student from './components/Student'
import Teacher from './components/Teacher'
import CustomMultiselect from './components/custom/multiselect/CustomMultiselect'
import CustomHierarchicalMultiselect from './components/custom/multiselect/CustomHierarchicalMultiselect'


const App = () => {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<>
            <CustomHierarchicalMultiselect />
            <CustomMultiselect />
          </>} />
          <Route path='/login' element={<CustomMultiselect />} />
          <Route path='/dashboard' element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
          <Route path='/admin' element={
            <ProtectedRoute roles={["admin"]}>
              <AdminPage />
            </ProtectedRoute>
          } />
          <Route path='/student' element={
            <ProtectedRoute roles={["student", "teacher", "admin"]}>
              <Student />
            </ProtectedRoute>
          } />
          <Route path='/teacher' element={
            <ProtectedRoute roles={["teacher", "admin"]}>
              <Teacher />
            </ProtectedRoute>
          } />
          <Route path='/unauthorized' element={<UnAuthorized />} />

          <Route path='*' element={<div>404</div>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
