import React, { useRef } from "react";

function Otp() {
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();

  const handleChangeInput4=(e)=>{
    console.log(e.key);
  }
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
      }}
    >
      <input autoFocus ref={input1} onChange={() => input2.current.focus()} />
      <input ref={input2} onChange={() => input3.current.focus()} />
      <input ref={input3} onChange={() => input4.current.focus()} />
      <input ref={input4} onKeyDown={handleChangeInput4}/>
    </div>
  );
}

export default Otp;
