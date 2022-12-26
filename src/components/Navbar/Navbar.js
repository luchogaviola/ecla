import './Navbar.css';
import Cartwidget from '../CartWidget/Cartwidget';

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="menu">
          <li>
            <button className="boton-menu active">Todos los productos</button>
          </li>
          <li>
            <button className="boton-menu">Camisetas</button>
          </li>
          <li>
            <button className="boton-menu">Pantalones</button>
          </li>
          <Cartwidget/>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;