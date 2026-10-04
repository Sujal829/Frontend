const RadioGroup = ({ name, options, onchange, value }) => {
  return (
    <>
      {options.map((option) => {
        return (
          <label key={option}>
            <input
              type="radio"
              id={option}
              name={name}
              value={option}
              checked={value === option}
              onChange={() => onchange(name, option)}
            />
            {option}
          </label>
        );
      })}
    </>
  );
};

export default RadioGroup;
