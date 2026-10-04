import Input from "../common/Input";
// import { v4 as uuidv4 } from "uuid";

function UseIdExample() {
  const fields = [{ label: "Name" }, { label: "Email" }, { label: "Password" }];
  return (
    <div>
      {fields.map((field) => {
        return (
          //   <Input id={Math.random()} key={field.label} label={field.label} />
          //   <Input id={uuidv4()} key={field.label} label={field.label} />
          <Input key={field.label} label={field.label} />
        );
      })}
      <Input label="Name" />
      <Input label="Email" />
      <Input label="Password" />
    </div>
  );
}

export default UseIdExample;
