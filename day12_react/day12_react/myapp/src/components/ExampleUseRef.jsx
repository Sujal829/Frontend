import { useRef, useState } from "react";

export default function ExampleUseRef() {
  const inputRef = useRef(null);
  const [firstName, setFirstNm] = useState("");

  const handleChange = (e) => {
    setFirstNm(e.target.value);
  };

  const handleClick =()=>{
    console.log(inputRef.current);
    inputRef.current.focus()
  }
  return (
    <div>
      <input ref={inputRef} value={firstName} onChange={handleChange} />
      <button onClick={handleClick} >Focus input</button>
    </div>
  );
}
