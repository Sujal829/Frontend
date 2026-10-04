const withStyle = (WrappedComponent) => {
  return (props) => {
    return (
      <WrappedComponent
        {...props}
        style={{ color: "red", padding: "10px", border: "1px solid red" }}
      />
    );
  };
};

export default withStyle;
