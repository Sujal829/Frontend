import { useId } from "react";

const Input = ({ label, onchange, ...rest }) => {
  const id = useId();
  console.log(id);
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} onChange={onchange} {...rest} />
    </div>
  );
};
export default Input;
