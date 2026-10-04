const Select = ({ name, value, options, onchange }) => {
  return (
    <select value={value} onChange={(e) => onchange(name, e.target.value)}>
      <option value="">Select {name}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
