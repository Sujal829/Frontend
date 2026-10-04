import { useEffect, useRef } from "react";

const CreateDocFragment = () => {
  const ulRef = useRef(null);

  useEffect(() => {
    // not recommended in React
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 1000; i++) {
      const li = document.createElement("li");
      li.textContent = `Item ${i}`;
      fragment.appendChild(li);
    }
    ulRef.current.appendChild(fragment);
  }, []);

  return <ul ref={ulRef}></ul>;
};

export default CreateDocFragment;

// React fiber = useTransition hook
// https://www.npmjs.com/package/react-window
// https://www.npmjs.com/package/react-virtualized
