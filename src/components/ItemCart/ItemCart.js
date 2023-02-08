import { CartContext } from "../../context/CartContext";
import { useContext } from 'react'
import "../ItemCart/ItemCart.css";
import buttondelete from "./borrar.png";

const ItemCart = ({ id, img, name, quantity, price }) => {

    const { removeItem } = useContext(CartContext)
  return (
    <article className="contenedor-carrito">
      <div className="carrito-producto">
        
          <img src={img} alt={name} className="carrito-producto-imagen" />
        

        <div className="carrito-producto-titles">
          <p className="p-item-cart">Titulo</p>
          <h4>{name}</h4>
        </div>

        <div className="carrito-producto-titles">
          <p className="p-item-cart">Cantidad</p>
          <h4> {quantity} </h4>
        </div>

        <div className="carrito-producto-titles">
          <p className="p-item-cart">Precio</p>
          <h4> {price} </h4>
        </div>

        <div className="carrito-producto-titles">
          <p className="p-item-cart">Subtotal</p>
          <h4> {price * quantity} </h4>
        </div>

        <div className="carrito-producto-titles">
          <img onClick={() => removeItem(id)} src={buttondelete} alt="button" className="button-delete " />
        </div>
      </div>
    </article>
  );
};

export default ItemCart;
