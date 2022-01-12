import AddUser from "./components/AddUser";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Users />
      <AddUser />
    </div>
  );
}

export default App;
