export const formSchema = [
  {
    name: "fullName",
    label: "Full Name",
    type: "text",
    placeholder: "Enter your name",
    required: true
  },
  {
    name: "bio",
    label: "Bio",
    type: "textarea"
  },
  {
    name: "gender",
    label: "Gender",
    type: "radio",
    options: ["Male", "Female", "Other"]
  },
  {
    name: "skills",
    label: "Skills",
    type: "multiselect",
    options: ["React", "Angular", "Vue", "Node"]
  },
  {
    name: "country",
    label: "Country",
    type: "select",
    options: ["India", "USA", "UK"]
  },
  {
    name: "subscribe",
    label: "Subscribe to newsletter",
    type: "checkbox"
  }
];