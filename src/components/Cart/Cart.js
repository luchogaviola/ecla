import "../ItemCart/ItemCart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartList from "../CartList/CartList";
import { Link } from "react-router-dom";

const Cart = ({ greeting }) => {
  const { cart, clearCart, total } = useContext(CartContext);
  return (
    <main>
      <h2 className="titulo-principal">{greeting}</h2>
      <div className="contenedor-productos">
        <CartList cart={cart} />

        <div className="div-carrito-compra">
            <button className="vaciar-carrito" onClick={() => clearCart()}>VACIAR CARRITO</button>
            <div className="div-carrito-compras">
            <div className="total-carrito">
            <p>TOTAL:</p>
            <strong style={{ paddingLeft: "5px" }}>${total}</strong>
          </div>
          <Link className="button-comprar-ahora" to="/checkout">COMPRAR AHORA</Link>
        </div>
            </div>
          
      </div>
    </main>
  );
};

export default Cart;
