import './Navbar.css';
import logo from "../ecla.png";
import Cartwidget from '../CartWidget/Cartwidget';

const Navbar = () => {
  return (
    <div className="aside">

      <header>
      <img className="logo" src={logo} alt="logo" />
      </header>
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
          <li>
          <Cartwidget/>
          </li>
          
        </ul>
      </nav>
      <footer>
          <p className="texto-footer">© 2022 Luciano Gaviola</p>
        </footer>
    </div>
  );
};

export default Navbar;