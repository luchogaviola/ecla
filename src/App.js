import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";

import AppRouter from "./routes/AppRouter";

import { CartProvider } from "./context/CartContext";

function App() {

  return (
    <div className="wrapper">
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <AppRouter />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
