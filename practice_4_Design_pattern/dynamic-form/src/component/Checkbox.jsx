const Checkbox = ({ name, onchange, value }) => {
  return (
    <input
      type="checkbox"
      name={name}
      checked={value}
      onChange={(e) => onchange(name, e.target.checked)}
    />
  );
};

export default Checkbox;
