import { useState } from "react";
import UserContext from "./UserContext";
import { generateIncrementId } from "../utils/helper";
// wrapper component
export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John",
      role: "Admin",
    },
    {
      id: 2,
      name: "Bunny",
      role: "Developer",
    },
  ]);

  const [selected, setSelected] = useState(null);

  const addUser=(newUser)=>{
    console.log(newUser);
    const lastEleId  = users[users.length-1].id;
    setUsers(prev => [...prev, generateIncrementId(lastEleId, newUser)])
  }

  const updateUser=(updatedUser)=>{
    const newUsers = [...users];
    const newData = newUsers.filter(d => d.id != selected.id);    
    setUsers([...newData, {...updatedUser, id: selected.id}]);
  }

  const deleteUser=(id)=>{
     const newUsers = [...users];
    const newData = newUsers.filter(d => d.id != id);    
    setUsers(newData);
  }

  const selectUser=(__selected)=>{
    setSelected(__selected);
  }

  return (
    <UserContext.Provider
      value={{
        users,
        selected,
        addUser,
        updateUser,
        deleteUser,
        selectUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
