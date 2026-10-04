import { useRef } from "react";

const UncontrolledValidation = () => {
  const nameRef = useRef();
  const ageRef = useRef();
  const fileRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: nameRef.current.value,
      age: ageRef.current.value,
      file: fileRef.current.files[0]?.name,
    };
    if (!formData.name || !formData.age) {
      alert("name and age are mandate");
    } else {
      console.log("formData", formData);
      alert(JSON.stringify(formData, null, 2));
    }
  };
  console.log("rendered!");

  return (
    <div>
      <h3>UncontrolledValidation component (control by React)</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={nameRef} />
        <input type="number" ref={ageRef} />
        <input type="file" ref={fileRef} />
        <button>Show value</button>
      </form>
    </div>
  );
};

export default UncontrolledValidation;
