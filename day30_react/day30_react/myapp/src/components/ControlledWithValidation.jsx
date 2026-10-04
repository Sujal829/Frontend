import { useState } from "react"

const ControlledWithValidation=()=>{
    const [form, setform] = useState({
        email:'',
        password:''
    })

    const handleChange=({target})=>{
        setform({
            ...form,
            [target.name]: target.value
        })
    }

    const isEmailValid  = form.email.includes('@');
    const isPasswordValid  =  form.password.length >= 6;
    return(
        <div>
            <h2>Controlled component with Validation</h2>
            <input 
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
            />
            {( form.email.length &&  !isEmailValid) ? <p style={{color: 'red'}}>Invalid email</p>: null}
            <input 
                text="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
            />
            {(form.password.length && !isPasswordValid) ? <p style={{color: 'red'}}>Password requires minimum 6 characters</p>: null}
            <h4>Preview</h4>
            <p>Email: {form.email}</p>
            <p>Password: {form.password}</p>
        </div>
    )
}

export default ControlledWithValidation