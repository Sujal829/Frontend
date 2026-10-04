const TextInput = ({ name, placeholder, required, onchange, value }) => {
  return (
    <input
      type="text"
      id={name}
      value={value || ""}
      name={name}
      placeholder={placeholder}
      required={required}
      onChange={(e) => onchange(name, e.target.value)}
    />
  );
};

export default TextInput;
