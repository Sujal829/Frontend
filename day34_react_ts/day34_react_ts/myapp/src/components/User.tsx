import { useEffect, useRef, useState, type JSX } from "react";

type User={
    name: string;
    age: number;
    address: {
        city: string;
        pincode: number;
        state: string;
    }
}
const User=(): JSX.Element=>{

    const [user, setUser] = useState<User | null>(null);
    const [input, setInput] = useState<string>('');
    const divRef = useRef<HTMLDivElement>(null);
    const inputRef= useRef<HTMLInputElement>(null);

    useEffect(()=>{
        inputRef.current?.focus()
    },[inputRef]);
    
    const handleSubmit=(e: React.FormEvent)=>{
        e.preventDefault();
    }
    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        setInput(e.target.value)
    }

    const handleClick=(e:React.MouseEvent<HTMLButtonElement>)=>{
        console.log(e);
        
    }

    return(
        <div ref={divRef}>

        <form onSubmit={handleSubmit}>
            <input ref={inputRef} onChange={handleChange}/>
            <button >Submit</button>
        </form>
        <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default User;