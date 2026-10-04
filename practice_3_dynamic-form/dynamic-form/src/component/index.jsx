import { useState } from "react";
import { formSchema } from "../mock/formSchema";

const DynamicForm =()=>{
    const [formValues, setFormValues] = useState({});

    const handleChange = (name, value)=>{
        setFormValues({...formValues, [name]: value});
    }

    const handleMultiSelectChange = (name, value)=>{
        const current = formValues[name] || [];
        const updated = current.includes(value)
            ? current.filter((item)=>item !== value)
            : [...current, value];
        setFormValues({...formValues, [name]: updated});
    }
    const renderFields = (field)=>{
        const {name, label, type, placeholder, options, required} = field;
        switch (type) {
            case "text":
                return <input type="text" id={name} name={name} placeholder={placeholder} required={required} onChange={(e)=>handleChange(name, e.target.value)}/>
            case "textarea":
                return <textarea id={name} name={name} placeholder={placeholder} required={required} onChange={(e)=>handleChange(name, e.target.value)}/>
            case "radio":
                return options.map((option)=>{
                    return (
                        <label key={option}>
                            <input 
                                type="radio" 
                                id={option} 
                                name={name} 
                                value={option}
                                checked={option === formValues[name]}
                                onChange={()=>handleChange(name, option)}
                            />
                            {option}
                        </label>
                    )
                })
            case "checkbox":
                return (
                    <input 
                        type="checkbox"
                        name={name}
                        checked={formValues[name] || false}
                        onChange={(e)=>handleChange(name, e.target.checked)}
                    />
                )
            case "select": 
                return (
                    <select
                    value={formValues[name] || ''}
                    onChange={(e)=>handleChange(name, e.target.value)}
                    >
                        <option value="">Select {label}</option>
                        {options.map((option)=>(
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                )
            case "multiselect":
                return options.map((option)=>{
                    return (
                        <label key={option}>
                            <input 
                                type="checkbox"
                                name={name}
                                value={option}
                                checked={(formValues[name]||[])?.includes(option)}
                                onChange={(e)=>handleMultiSelectChange(name, option)}
                            />
                            {option}
                        </label>
                    )
                })
            default:
                return null;
        }
    }

    return(
        <div>
            <h1>Dynamic Form</h1>
            <form className="form">
                {formSchema.map((field)=>(
                    <div key={field.name} className="form-group">
                        <label htmlFor={field.name}>{field.label}</label>
                        {renderFields(field)}
                    </div>
                ))}
            </form>
        </div>

    )
}

export default DynamicForm;