const withLoader = (WrappedComponent) => {
  return ({ isLoading, ...props }) => {
    return isLoading ? <div>Loading...</div> : <WrappedComponent {...props} />;
  };
};

export default withLoader;
