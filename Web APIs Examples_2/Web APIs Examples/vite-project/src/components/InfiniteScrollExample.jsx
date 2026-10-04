import { useRef } from "react";
import { useCallback, useEffect, useState } from "react";
const LIMIT = 50;

const InfiniteScrollExample = () => {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(null);
  const [loading, setLoading] = useState(false);

  const observerRef = useRef(null);

  const fetchProducts = useCallback(async () => {
    if (loading) return;
    if (total !== null && products.length >= total) return;

    setLoading(true);
    const response = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`,
    );
    try {
      const data = await response.json();
      setProducts((prev) => [...prev, ...data.products]);
      setSkip((prev) => prev + LIMIT);
      setTotal(data.total);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [skip, loading, total, products.length]);

  useEffect(() => {
    if (!observerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetchProducts();
        }
      },
      {
        rootMargin: "200px",
        threshold: 0,
      },
    );
    observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [fetchProducts]);

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "auto",
      }}
    >
      <h1>Infinite Scroll Example</h1>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            display: "flex",
            gap: 12,
            padding: 12,
            borderBottom: "1px solid #ddd",
          }}
        >
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
      ))}
      {loading && <p> laoding....!</p>}
      {total !== null && products.length >= total && <p>No more products</p>}
      <div
        ref={observerRef}
        style={{
          height: 1,
        }}
      ></div>
    </div>
  );
};

export default InfiniteScrollExample;
