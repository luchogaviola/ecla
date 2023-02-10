import { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./ItemDetail.css";

const ItemDetail = ({ id, name, img, price, description, stock }) => {
  const { addItem, isInCart } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    addItem({ id, name, price, quantity });
  };

  return (
    <div className="div-main">
      <img className='img-padding' src={img} alt={name} />
      <div>
        <h4 className="title-item-detail">{name}</h4>
        <p className="p-itemdetail">$ {price}</p>
        <p className="p-itemdetail">{description}</p>
        {isInCart(id) ? (
          <Link to="/cart" className="button-ready">Terminar compra</Link>
        ) : (
          <ItemCount stock={stock} onAdd={handleOnAdd} />
        )}
        
        
      </div>
    </div>
  );
};

export default ItemDetail;
