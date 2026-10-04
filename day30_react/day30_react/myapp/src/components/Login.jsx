import { useInput } from "../hooks/useInput";

const Login=()=>{
    const username = useInput();
    const password = useInput();
    console.log(username);
    
    const handleReset=()=>{
        username.reset();
        password.reset();
    }
    return (
        <div>
            <input {...username} placeholder='Enter Name'/>
            <input {...password} placeholder="Enter password"/>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Login;