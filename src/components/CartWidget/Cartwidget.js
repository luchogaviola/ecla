import cartwidget from '../CartWidget/cartwidget.png'
import '../CartWidget/Cartwidget.css'
import '../Navbar/Navbar.css'

const Cartwidget = () => {
  return (
    <ds>
            <a className="boton-menu boton-carrito" href="./carrito.html">
              <img className="cartwidget" src={cartwidget} alt="cartwidget"/> Carrito{" "}
              <span className="numerito">0</span>
            </a>
          
    </ds>
  )
}

export default Cartwidget;
