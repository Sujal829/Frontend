import { useEffect } from "react";

const Welcome=()=>{
    useEffect(()=>{
        console.log('Welcome');
    }, []); // empty dependency -> runs only once like componentDidMount
    // return null
}

export default Welcome;