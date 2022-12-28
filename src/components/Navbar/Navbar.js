import './Navbar.css';
import logo from "../ecla.png";
import Cartwidget from '../CartWidget/Cartwidget';

const Navbar = () => {
  return (
    <aside className="aside">

      <div className="div__aside">
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
          
          <Cartwidget/>
         
          
        </ul>
      </nav>
      <footer>
          <p className="texto-footer">© 2022 Luciano Gaviola</p>
        </footer>
      </div>

    </aside>
  );
};

export default Navbar;