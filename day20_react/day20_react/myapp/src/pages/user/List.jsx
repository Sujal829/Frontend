import React from "react";
import { useNavigate } from "react-router-dom";

function List({ users }) {
    const navigate = useNavigate();
    const handleRedirect=(id)=>{
        navigate(`/users/${id}/cart/${id}`);
    }
  return (
    <div>
      <ul>
        {users?.map((d) => {
          const name = `${d.name.firstname} ${d.name.lastname}`;
          return (
            <li 
                key={d.id} 
                style={{ cursor: "pointer" }}
                onClick={()=>handleRedirect(d.id)}
                >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
