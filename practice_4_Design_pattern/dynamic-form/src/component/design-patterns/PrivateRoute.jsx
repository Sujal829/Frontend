//HOC pattern
const PrivateRoute = ({ children }) => {
  const auth = AuthContext(authContxt);
  return auth ? children : <div>Login</div>;
};

export default PrivateRoute;

// usage:

{
  /* <PrivateRoute auth={isAuth}>
    <Dashboard />
</PrivateRoute> */
}

// const AuthContext = React.createContext();

// const AuthProvider = ({ children }) => {
//   return <AuthContext.Provider value={true}>{children}</AuthContext.Provider>;
// };

// export default AuthProvider;
