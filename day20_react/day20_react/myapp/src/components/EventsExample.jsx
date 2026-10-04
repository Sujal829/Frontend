import { useState } from "react";

function EventsExample() {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState('');
  const handleClick=()=>{
    alert('Clicked!')
  }

  const handleClickWithDefaultParam=(e)=>{
    console.log('Synthetic Event object: ',e);
  }

  const handleDivClick=(e)=> console.log('Div event',e);
  
  const handleClickWithUserdefinedParam=(value)=>{
    console.log(value);
    setCounter(counter+1);
  }

  const handleChange=(e)=>{
    const { value } = e.target;
    setText(value)
  }

  return (
    <div>
      <div onClick={handleDivClick} style={{cursor: 'pointer'}}>Div onclick</div>
      <button onClick={handleClick} >Click</button>
      <button onClick={handleClickWithDefaultParam} > Click with default event param</button>
      <button onClick={()=>handleClickWithUserdefinedParam('John walker')} >Click me with param</button>

      {/* // one way binding */}
      <input value={text} onChange={handleChange} /> 
      {/* // two way binding */}
      <p>Text: {text}</p> 
    </div>
  );
}

export default EventsExample;