const TextAera = ({name, placeholder, required, onchange})=>{
    return(
       <textarea id={name} name={name} placeholder={placeholder} required={required} onChange={(e)=>onchange(name, e.target.value)}/>
    )
}

export default TextAera;