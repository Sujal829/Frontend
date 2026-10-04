import { useUserContext } from "../hooks/useUserContext";

function UserList() {
  const { users, selectUser, deleteUser } = useUserContext();

  const handleDelete=(e, id)=>{
    e.stopPropagation();
    deleteUser(id)
  }
  return (
    <div>
      <ul>
        {users.map((ele) => (
          <li
            key={ele.id}
            style={{ cursor: "pointer" }}
            onClick={() => selectUser(ele)}
          >
            {ele.name}{" "}
            <button onClick={(e)=>handleDelete(e, ele.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
