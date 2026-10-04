const withSomething = (WrappedComponent) => {
  return (props) => {
    return <WrappedComponent {...props} />;
  };
};

export default withSomething;

// usage

const MyComponent = () => {
  return <div>My Component</div>;
};

const MyComponentWithSomething = withSomething(MyComponent);

export { MyComponentWithSomething };
