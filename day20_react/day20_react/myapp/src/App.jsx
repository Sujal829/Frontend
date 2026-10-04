import "./App.css";
import LoginRoleBasedRoutes from "./routes/LoginRoleBasedRoutes";
import NextedRoutes from "./routes/NextedRoutes";
import ParamsRoute from "./routes/ParamsRoute";

function App() {
  return <div>
     {/* <NextedRoutes /> */}
     {/* <ParamsRoute /> */}
     <LoginRoleBasedRoutes />
  </div>
}

export default App;