// useDeferredValue
// used to defer updating a value
// it will not block the UI
// debounce
// throttle
// setTimeout

import { useDeferredValue } from "react";
import Products from "../common/List";
import { useState } from "react";
import { useEffect } from "react";

const UseDeferredValueExample = () => {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const deferredQuery = useDeferredValue(searchText);

  const filteredData = products.filter((item) =>
    item.title.toLowerCase().includes(deferredQuery.toLowerCase()),
  );

  return (
    <div>
      <input type="text" onChange={(e) => setSearchText(e.target.value)} />
      <Products data={filteredData} />
    </div>
  );
};

export default UseDeferredValueExample;
