import "./App.css";
import AddItem from "./components/AddItem";
import "bootstrap/dist/css/bootstrap.css";
//import EditItem from "./components/EditItem";

function App() {
  return (
    <div className="App">
      <h1>TO-DO LIST</h1>
      <AddItem />
    </div>
  );
}

export default App;
