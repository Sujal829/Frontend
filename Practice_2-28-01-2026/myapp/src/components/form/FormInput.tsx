import { useState, type InputHTMLAttributes } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label: string;
    error?: string;
}
const FormInput = ({ multiple, label, error, id, ...props }: FormInputProps) => {
    const [touched, setTouched] = useState(false);

    const handleBlur = () => {
        setTouched(true);
    }

    return (
        <div>
            <label htmlFor={id}>
                {label}
                {props.required && <span className="text-red-500">*</span>}
            </label>
            {multiple ? <textarea {...props} id={id} onBlur={handleBlur} />
                :
                <input {...props} id={id} onBlur={handleBlur} />
            }
            {touched && error && <span style={{
                color: 'red',
                fontSize: '12px'
            }}>{error}</span>}
        </div>
    )
}

export default FormInput;
