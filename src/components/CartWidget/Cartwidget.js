import cartwidget from '../CartWidget/cartwidget.png'

const Cartwidget = () => {
  return (
    <div>
            <a className="boton-menu boton-carrito" href="./carrito.html">
              <img className="cartwidget" src={cartwidget}></img> Carrito{" "}
              <span class="numerito">0</span>
            </a>
          
    </div>
  )
}

export default Cartwidget;
