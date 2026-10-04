import withData from "./WithData";
import withRole from "./WithRole";

const fetchUser = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
};
const Dashboard = ({ data, error, isLoading }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};
const DashboardWithRole = withRole("manager")(Dashboard);
const DashboardWithData = withData(fetchUser)(DashboardWithRole);
export default DashboardWithData;
