import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="wrapper">

        <Navbar />

      <ItemListContainer greeting='Todos los productos'/>

    </div>

  );
}

export default App;
