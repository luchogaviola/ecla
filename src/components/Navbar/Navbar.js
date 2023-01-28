import './Navbar.css';
import Cartwidget from '../CartWidget/Cartwidget';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <aside className="aside">

      <div className="div__aside">
      <header>
      <img className="logo" src='./images/ecla.png' alt="logo" />
      </header>
      <nav>
        <ul className="menu">
          <li>
          <Link to='/'><button className="boton-menu active">Todos los productos</button></Link>
          </li>
          <li>
          <Link to='/category/remeras'><button className="boton-menu">Camisetas</button></Link>
          </li>
          <li>
          <Link to='/category/pantalones'><button className="boton-menu">Pantalones</button></Link>
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