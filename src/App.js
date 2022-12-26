import logo from "./components/ecla.png";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="wrapper">
      <aside className="aside">
        <img className="logo" src={logo}></img>

        <Navbar />

        <footer>
          <p className="texto-footer">© 2022 Luciano Gaviola</p>
        </footer>
      </aside>
      <ItemListContainer />
    </div>
  );
}

export default App;
