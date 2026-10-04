// server component - nextJS
import { use } from "react";

const List = ({ promise }) => {
  const posts = use(promise);
  console.log(posts);
  return (
    <ul>
      {posts.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default List;
