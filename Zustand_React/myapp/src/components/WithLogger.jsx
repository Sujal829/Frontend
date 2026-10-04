const withLogger = (WrappedComponent, name) => {
  return (props) => {
    console.log(`${name} rendered`, props);
    return <WrappedComponent {...props} />;
  };
};

export default withLogger;
