import { useAuth } from "../hooks/useAuth";

const AdminPage = () => {
    const { user }= useAuth();
    return (
        <div style={{padding: 20 }}>
            <h1>Admin Page</h1>
            <p>This page is only accessible to admins.</p>
            <p>Logged in as: {user?.role}</p>
            <p>Email: {user?.email}</p>
        </div>
    )
}

export default AdminPage;