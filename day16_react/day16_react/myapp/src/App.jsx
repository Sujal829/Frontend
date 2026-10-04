import "./App.css";
import CreatePost from "./components/CreatePost";
import Posts from "./components/PostList";
import { ApiProvider } from "./context/ApiProvider";

function App() {
  return (
    <ApiProvider>
      <Posts />
      <CreatePost />
    </ApiProvider>
  );
}

export default App;
