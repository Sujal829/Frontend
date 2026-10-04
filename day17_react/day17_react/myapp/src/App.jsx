import "./App.css";
import CreateUserForm from "./components/CreateUserForm";
import ProductList from "./components/ProductList";
import UserList from "./components/UserList";
import { ProductProvider } from "./context/ProductProvider";
import { UserProvider } from "./context/UserProvider";

function App() {
  return (
    <div>
    <UserProvider>
      <UserList />
      <CreateUserForm />
    </UserProvider>
    <ProductProvider>
      <ProductList />
    </ProductProvider>
    </div>
  );
}

export default App;
