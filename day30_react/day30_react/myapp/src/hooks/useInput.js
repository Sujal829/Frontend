import { useState } from 'react'

export const useInput=(initialValue='')=>{
    const [value, setValue] = useState();
    const onChange=({target})=> setValue(target.value);
    const reset=()=> setValue(initialValue);

    return {value, onChange, reset};
}