const withAuth = (WrappedComponent) => {
  return (props) => {
    const isAuth = localStorage.getItem("token") !== null;
    // const isAuth = useContext(AuthContext);
    // const isAuth = useSelector((state) => state.auth.isAuthenticated);
    return isAuth ? <WrappedComponent {...props} /> : <div>Unauthorized</div>;
  };
};

export default withAuth;
