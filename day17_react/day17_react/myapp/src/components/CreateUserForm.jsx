import React, { useEffect, useState } from "react";
import { useUserContext } from "../hooks/useUserContext";

function CreateUserForm() {
  const { addUser, selected, updateUser, selectUser } = useUserContext();
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (selected) {
      setName(selected.name);
      setRole(selected.role);
    }
  }, [selected]);

  const reset=()=>{
    setName('');
    setRole('');
  }

  const handleAddUser = () => {
    if (!name || !role) return;
    const value = { name, role };
    addUser(value);
    reset();
  };

  const handleUpdateUser=()=>{
     if (!name || !role) return;
    const value = { name, role };
    updateUser(value);
    selectUser(null);
    reset();
  }
  return (
    <div>
      <input value={name} onChange={({ target }) => setName(target.value)} />
      <input value={role} onChange={({ target }) => setRole(target.value)} />
      <button onClick={selected ? handleUpdateUser : handleAddUser}>
        {selected ? "Update" : "Add user"}
      </button>
    </div>
  );
}

export default CreateUserForm;
