import withLogger from "./WithLogger";
import withStyle from "./WithStyle";

const Button = (props) => {
  return <button {...props}> {props.children}</button>;
};

const CustomButton = withStyle(Button);

export default withLogger(CustomButton, "Button");
