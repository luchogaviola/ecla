import '../CartWidget/Cartwidget.css'
import '../Navbar/Navbar.css'

const Cartwidget = () => {
  return (
    <div>
            <a className="boton-menu boton-carrito" href="./carrito.html">
              <img className="cartwidget" src='./images/cartwidget.png' alt="cartwidget"/> Carrito{" "}
              <span className="numerito">0</span>
            </a>
          
    </div>
  )
}

export default Cartwidget;
