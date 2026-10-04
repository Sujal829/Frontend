import { useLayoutEffect, useState } from "react";

function Box({ color }) {
  useLayoutEffect(() => {
    console.log("useLayoutEffect ran for color: ", color);

    return () => {
      console.log("Cleanup for color", color);
    };
  }, [color]);

  return <div style={{ background: color, height: 50, width: 50 }} />;
}

export default function Example3() {
  const [color, setColor] = useState("red");
  return (
    <div>
      <Box color={color} />
      <button onClick={() => setColor(color === "red" ? "yellow" : "red")}>
        Change Color
      </button>
    </div>
  );
}
