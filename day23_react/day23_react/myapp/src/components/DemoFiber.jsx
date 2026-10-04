import React, { useState, useTransition } from 'react'

function DemoFiber() {
    const [items, setitems] = useState([]);
    const [text, settext] = useState('');

    const [isPending, startTransition]=useTransition();
    const handleTransition=()=>{
        startTransition(()=>{
            const newItem = [];
            for (let i = 0; i < 20000; i++) {
                newItem.push(`Item number ${i}`)                
            }
            setitems(newItem)
        })
    }
  return (
    <div style={{padding: '20px'}}>
        <h2>React fiber example</h2>
        <input 
            type='text'
            placeholder='Try typing while list renders!'
            value={text}
            onChange={({target})=>settext(target.value)}
        />
        <button onClick={handleTransition}>Generate huge list</button>
        {isPending && <p>Rendering hug list....!</p>}
        <ul>
            {items.map((item, index)=> (
                <li key={index} style={{padding: 5}}>
                    {item}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default DemoFiber
