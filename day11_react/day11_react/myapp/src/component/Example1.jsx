import { useLayoutEffect, useRef, useState } from "react";

const SmoothExpand=()=>{
    const [expand, setExpand] = useState(false);
    const [height, setHeight] = useState(0);
    const myRef = useRef(null);

    const handleExpand=()=>{
        setExpand(p=> !p)
    }

    useLayoutEffect(()=>{
        if(expand && myRef.current){
            const scorllHeight = myRef.current.scrollHeight;
            setHeight(scorllHeight)
        }else{
            setHeight(0);
        }
    },[expand]);

    return(<div>
        <button onClick={handleExpand}> {expand? 'Collapse' : 'Expand'} </button>
        <div    
            ref={myRef}
            style={{
                height: height,
                overflow: "hidden",
                transition: "height 0.4s ease",
                background: '#ca0202ff',
                marginTop: '10px'                
            }}
        >
            <p>
                This content is going to get expand smoothly
            </p>
        </div>
    </div>)
}

export default SmoothExpand;