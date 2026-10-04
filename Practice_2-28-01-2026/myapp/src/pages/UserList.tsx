import { useEffect, useState } from "react"
import Table from "../components/table"

type IUser = {
    id: number;
    name: string;
    email: string;
}

const Users_Column = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "email", label: "Email" },
]

const UserList: React.FC = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsers(data);
        }
        fetchUsers();
    }, [])

    return (
        <div>
            <h1>UserList</h1>
            <Table data={users} columns={Users_Column} />
        </div>
    )
}

export default UserList;