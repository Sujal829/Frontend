import { useParams } from "react-router-dom";
import { useAPI } from "../hooks/useAPI";
import { useEffect, useState } from "react";

const UserDetails = () => {
  const params = useParams();
  const [user, setUser] = useState();

  const { data, error, loading } = useAPI(
    `https://dummyjson.com/users/${params.id}`,
    {}
  );

  useEffect(() => {
    setUser(data);
  }, [data]);

  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (loading) return <p>Loading.....!</p>;
  return (
    <div>
      <img src={user?.image} />
      <p>{user?.firstName}</p>
      <p>{user?.lastName}</p>
    </div>
  );
};

export default UserDetails;
