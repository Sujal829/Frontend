import { useReducer } from "react";
import { initialState, signupReducer } from "../reducers/signupReducer";

export default function SignupForm() {
  const [formState, dipatch] = useReducer(signupReducer,initialState);

//   const handleNameChange = (e) => {
//     dipatch({type: 'name', value: e.target.value});
//   };

//   const handleEmailChange = (e) => {
//     dipatch({type: 'email', value: e.target.value});
//   };
//   const handlePasswordChange = (e) => {
//     dipatch({type: 'password', value: e.target.value});
//   };

// const handleChange=(e)=>{
//     dipatch(
//         {
//             type:  e.target.name,
//             value: e.target.value
//         }
//     );
// }

const handleChange=(e)=>{
    dipatch(
        {
            type: 'update',
            field: e.target.name,
            value: e.target.value
        }
    );
}

  const handleSubmit=(e)=>{
    e.preventDefault(); // prevents the default reload behaviour
    console.log(formState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Signup</h3>
      <input
        name="name"
        placeholder="Enter name"
        value={formState.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Enter email"
        value={formState.email}
        onChange={handleChange}
      />
      <input
        name="password"
        placeholder="Enter password"
        value={formState.password}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
