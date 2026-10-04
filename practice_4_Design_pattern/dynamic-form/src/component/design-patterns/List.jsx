import useAPI from "./useAPI";

// Container-presentational pattern
// compound component pattern
const List = () => {
  const {
    data: users,
    loading: userLoading,
    error: userError,
  } = useAPI({
    url: "https://jsonplaceholder.typicode.com/users",
  });

  const {
    data: comments,
    loading: commentLoading,
    error: commentError,
  } = useAPI({
    url: "https://jsonplaceholder.typicode.com/comments",
  });

  return users?.map((user) => <UserList key={user.id} user={user} />);
};

const UserList = ({ user }) => {
  return <div>{user?.name}</div>;
};

export default List;
