import Profile from "./Profile";
import AccessDenied from "./AccessDenied";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const { isAuth, handleAuth } = useContext(AuthContext);
  return (
    <div>
      <h2>Dashboard</h2>

      {isAuth ? (
        <Profile />
      ) : (
        <div>
          <button onClick={() => handleAuth(true)}>Login</button>
          <AccessDenied />
        </div>
      )}
    </div>
  );
}

export default Dashboard;
