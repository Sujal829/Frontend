import { useState } from "react";
import useAuthStore from "../store/authStore"
import { useNavigate } from "react-router-dom";

const Login = () => {
    const login = useAuthStore(state => state.login);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        login(email, password)
    };
    // useAuthStore.getState().logout()
    return (
        <div>
            <h2>Login</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 6
            }}>

                <input value={email} onChange={({ target }) => setEmail(target.value)} placeholder="Enter Email" />
                <input value={password} onChange={({ target }) => setPassword(target.value)} placeholder="Enter Password" />

                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    )
}

export default Login;