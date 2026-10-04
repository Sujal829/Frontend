import withLogger from "./WithLogger";
import withRole from "./WithRole";
import withStyle from "./WithStyle";

const Paragraph = (props) => {
  return <p {...props}>{props.children}</p>;
};

const CustomParagraph = withStyle(Paragraph);
const CustomParagraphWithLogger = withLogger(CustomParagraph, "Paragraph");
export default withRole("admin")(CustomParagraphWithLogger);
