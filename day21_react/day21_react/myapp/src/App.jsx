import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import "./App.css";
import NotFound from "./components/404";
import PublicRoute from "./routes/PublicRoute";
import AccessDenied from "./components/AccessDenied";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicRoute><Home/></PublicRoute>} />
          <Route path="/login" element={<PublicRoute><Login/></PublicRoute>} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute role={['admin', 'manager']}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/unauthorized" Component={AccessDenied}/>
          <Route path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
