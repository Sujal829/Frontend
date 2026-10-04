import { useRef, useState } from "react";
import { formSchema } from "../mock/formSchema";
import Button from "./design-patterns/Button";
import Form from "./design-patterns/Form";

const DynamicForm = () => {
  const [formValues, setFormValues] = useState({});
  //   let testValue = "";
  //   const inputRef = useRef(null);
  const handleChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const handleMultiSelectChange = (name, value) => {
    const current = formValues[name] || [];
    const updated = current.includes(value)
      ? current.filter((item) => item !== value)
      : [...current, value];
    setFormValues({ ...formValues, [name]: updated });
  };
  const renderFields = (field) => {
    const { name, label, type, placeholder, options, required } = field;
    switch (type) {
      case "text":
        return (
          <input
            type="text"
            id={name}
            value={formValues[name]}
            name={name}
            placeholder={placeholder}
            required={required}
            onChange={(e) => handleChange(name, e.target.value)}
          />
        );
      case "textarea":
        return (
          <textarea
            id={name}
            name={name}
            placeholder={placeholder}
            required={required}
            onChange={(e) => handleChange(name, e.target.value)}
          />
        );
      case "radio":
        return options.map((option) => {
          return (
            <label key={option}>
              <input
                type="radio"
                id={option}
                name={name}
                value={option}
                checked={option === formValues[name]}
                onChange={() => handleChange(name, option)}
              />
              {option}
            </label>
          );
        });
      case "checkbox":
        return (
          <input
            type="checkbox"
            name={name}
            checked={formValues[name] || false}
            onChange={(e) => handleChange(name, e.target.checked)}
          />
        );
      case "select":
        return (
          <select
            value={formValues[name] || ""}
            onChange={(e) => handleChange(name, e.target.value)}
          >
            <option value="">Select {label}</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      case "multiselect":
        return options.map((option) => {
          return (
            <label key={option}>
              <input
                type="checkbox"
                name={name}
                value={option}
                checked={(formValues[name] || [])?.includes(option)}
                onChange={(e) => handleMultiSelectChange(name, option)}
              />
              {option}
            </label>
          );
        });
      default:
        return null;
    }
  };

  //   formValues.fullName = "ABCD";

  //   this.state.fullName = "ABCD";

  return (
    <div>
      <h1>Dynamic Form</h1>
      <Form className="form" onSubmit={(e) => e.preventDefault()}>
        {formSchema.map((field) => (
          <div key={field.name} className="form-group">
            <label htmlFor={field.name}>{field.label}</label>
            {renderFields(field)}
          </div>
        ))}
        {/* // conditional rendering pattern */}
        {Object.keys(formValues).length > 2 && <Button label="Proceed" />}
        {/* {Object.keys(formValues).length > 2 ? <Button label="Proceed" /> : null} */}
        {formValues?.fullName && formValues?.fullName}
      </Form>

      {/* <input ref={inputRef} onChange={(e) => (testValue = e.target.value)} />
      <Button
        label="Click"
        onClick={() => (testValue = inputRef.current.value)}
      />
      <p>{"test static value:" + testValue}</p> */}
    </div>
  );
};

export default DynamicForm;
