import { useState } from "react";
import { formSchema } from "../mock/formSchema";
import TextInput from "./TextInput";
import TextAera from "./TextAera";
import RadioGroup from "./RadioGroup";
import Checkbox from "./Checkbox";
import Select from "./Select";
import MultiSelect from "./MultiSelect";

const componentMap = {
  text: TextInput,
  textarea: TextAera,
  radio: RadioGroup,
  checkbox: Checkbox,
  select: Select,
  multiselect: MultiSelect,
};

const DynamicForm = () => {
  const [formValues, setFormValues] = useState({});

  const handleChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const renderFields = (field) => {
    const { name, label, type, placeholder, options, required } = field;
    switch (type) {
      case "text":
        return (
          <TextInput
            name={name}
            value={formValues[name]}
            placeholder={placeholder}
            required={required}
            onchange={handleChange}
          />
        );
      case "textarea":
        return (
          <TextAera
            name={name}
            placeholder={placeholder}
            required={required}
            onchange={handleChange}
          />
        );
      case "radio":
        return (
          <RadioGroup
            name={name}
            options={options}
            value={formValues[name] || false}
            onchange={handleChange}
          />
        );
      case "checkbox":
        return (
          <Checkbox
            name={name}
            value={formValues[name] || false}
            onchange={handleChange}
          />
        );
      case "select":
        return (
          <Select
            name={name}
            value={formValues[name] || ""}
            options={options}
            onchange={handleChange}
          />
        );
      case "multiselect":
        return (
          <MultiSelect
            name={name}
            options={options}
            values={formValues[name] || []}
            onchange={handleChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Dynamic Form</h1>
      <form className="form">
        {formSchema.map((field) => {
          const Component = componentMap[field.type];

          return (
            <div key={field.name} className="form-group">
              <label htmlFor={field.name}>{field.label}</label>
              {/* {renderFields(field)} */}
              <Component
                {...field}
                value={formValues[field.name]}
                onchange={handleChange}
              />
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default DynamicForm;
