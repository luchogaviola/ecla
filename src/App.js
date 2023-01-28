import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>

      <Navbar />

        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Todos los productos'}/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos filtrados'}/>} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />

        </Routes>

        
      </BrowserRouter>
    </div>
  );
}

export default App;
