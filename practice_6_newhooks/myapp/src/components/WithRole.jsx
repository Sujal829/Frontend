const withRole = (requiredRole) => {
  return (WrappedComponent) => {
    return (props) => {
      const role = localStorage.getItem("role");
      if (role !== requiredRole) {
        return <div>Access denied!</div>;
      }
      return <WrappedComponent {...props} role={role + props.name} />;
    };
  };
};

export default withRole;
