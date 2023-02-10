import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";

import AppRouter from "./routes/AppRouter";

import { CartProvider } from "./context/CartContext";

import { NotificationProvider } from './notification/NotificationService';

function App() {

  return (
    <div className="wrapper">
      <NotificationProvider>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <AppRouter />
        </BrowserRouter>
      </CartProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
