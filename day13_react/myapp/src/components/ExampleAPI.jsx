import { useEffect, useState } from "react";

const ExampleAPI = () => {
  const [data, setDatat] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res) => setDatat(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Loading...!</p>;
  return (
    <ul>
      {data.map(({ title, id }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
};

export default ExampleAPI;
