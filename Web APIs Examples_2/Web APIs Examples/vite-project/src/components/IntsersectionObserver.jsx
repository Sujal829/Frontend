import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

const CustomIntersectionObserver = () => {
  const [visible, setVisible] = useState(false);
  const [height, setHeight] = useState(100);
  const divRef = useRef(null);

  useEffect(() => {
    if (!divRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        setHeight(entry.boundingClientRect.height + 100);
      },
      { threshold: 0.5 },
    );

    observer.observe(divRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        height: "150vh",
        position: "relative",
      }}
    >
      <div
        ref={divRef}
        style={{
          height: `${height}px`,
          backgroundColor: visible ? "green" : "gray",
          transition: "0.3s",
        }}
      >
        {!visible ? "Visible" : "scroll down"}
      </div>
    </div>
  );
};

export default CustomIntersectionObserver;
