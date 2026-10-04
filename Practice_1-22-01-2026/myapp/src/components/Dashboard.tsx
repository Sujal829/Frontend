import { useAuth } from "../hooks/useAuth"

const Dashboard = () => {
    const { user } = useAuth();
    return (
        <div style={{ padding: 20 }}>
            <h1>Dashboard Page</h1>
            <p>Logged in as: {user?.role}</p>
            <p>Email: {user?.email}</p>
        </div>
    )
}

export default Dashboard;