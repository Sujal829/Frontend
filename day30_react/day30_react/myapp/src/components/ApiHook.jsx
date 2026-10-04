import { useNavigate } from "react-router-dom";
import { useAPI } from "../hooks/useAPI";

const ApiHook=()=>{
    const {data, error, loading} = useAPI('https://dummyjson.com/users', {});
    const navigate = useNavigate();
    const handleClick=(id)=>{
        navigate(`/user/${id}`)
    }

    if (error) return <p style={{ color: 'red'}}>{error}</p>;
    if(loading) return <p>Loading.....!</p>;
    return(
        <div>
            <ul>
                {data?.users?.map(({id, firstName, email})=><li key={id}
                onClick={()=>handleClick(id)}
                 >
                    <strong>{firstName}</strong>
                    <p>Email: {email}</p>
                </li>)}
            </ul>
        </div>
    )
}

export default ApiHook;