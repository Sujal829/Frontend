// uncontrolled component pattern
import { useRef } from "react";

const CustomInput = () => {
  const inputRef = useRef(null);
  return <input ref={inputRef} type="text" />;
};

export default CustomInput;
