import './Navbar.css';
import { useContext } from 'react'
import Cartwidget from '../CartWidget/Cartwidget';
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const Navbar = () => {
  const navigate = useNavigate()

  const { totalQuantity } = useContext(CartContext)

  return (
    <aside className="aside">

      <div className="div__aside">
      <header>
      <img onClick={() => navigate('/')} className="logo" src='./images/ecla.png' alt="logo" />
      </header>
      <nav>
        <ul className="menu">
          <li>
          <NavLink className={({ isActive }) => isActive ? 'boton-menu active' : 'boton-menu'} to='/'>Todos los productos</NavLink>
          </li>
          <li>
          <NavLink className={({ isActive }) => isActive ? 'boton-menu active' : 'boton-menu'} to='/category/remeras'>Remeras</NavLink>
          </li>
          <li>
          <NavLink className={({ isActive }) => isActive ? 'boton-menu active' : 'boton-menu'} to='/category/pantalones'>Pantalones</NavLink>
          </li>
          
          <Cartwidget quantity={totalQuantity}/>
         
          
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