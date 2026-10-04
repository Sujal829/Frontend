const MultiSelect = ({ values = [], name, options, onchange }) => {
  const toggle = (opt) => {
    const updated = values.includes(opt)
      ? values.filter((item) => item !== opt)
      : [...values, opt];
    onchange(name, updated);
  };
  return (
    <>
      {options.map((option) => {
        return (
          <label key={option}>
            <input
              type="checkbox"
              name={name}
              value={option}
              checked={values.includes(option)}
              onChange={(e) => toggle(option)}
            />
            {option}
          </label>
        );
      })}
    </>
  );
};

export default MultiSelect;
