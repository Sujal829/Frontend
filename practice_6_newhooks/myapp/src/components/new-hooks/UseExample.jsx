// use()
// Allows compnents to diretly read
// 1. Promises
// 2. Context
// 3. Async Data

import List from "../common/listing";

// older way

// useEffect(() => {
//     fetchData().then((data) => {
//         setData(data)
//     })
// }, [])

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const UseExample = () => {
  return <List promise={fetchData()} />;
};

export default UseExample;
