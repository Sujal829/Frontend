import { useEffect } from "react";
import { useRef } from "react";

const CustomMutationObserver = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new MutationObserver(() =>
      console.log("Changes detected"),
    );
    observer.observe(ref.current, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, []);
  return <div ref={ref}>Watching changes....!</div>;
};

export default CustomMutationObserver;
