import { Link } from "react-router-dom";
import "../CartWidget/Cartwidget.css";
import "../Navbar/Navbar.css";

const Cartwidget = ({ quantity }) => {
  return (
    <div>
      <Link className="boton-menu boton-carrito" to="/cart">
        <img
          className="cartwidget"
          src="./images/cartwidget.png"
          alt="cartwidget"
        />{" "}
        Carrito <span className="numerito">{quantity}</span>
      </Link>
    </div>
  );
};

export default Cartwidget;
