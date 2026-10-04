import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import AuthLayout from "./authLayout";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
         <AuthLayout> <Login /></AuthLayout>
        } />
        <Route path="/home" element={
          <AuthLayout>
            <Home text={[1]} />
          </AuthLayout>} />
          <Route path="*" element={<p>Not found 404 Page</p>} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
