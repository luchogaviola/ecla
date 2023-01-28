import { useState } from 'react'
import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, name, img, price, description, stock }) => {
    const [quantity, setQuantity] = useState(0)

    const handleOnAdd = (qty) => {
        setQuantity(qty)
    }
    
    return (
        <div>
            <h4>{name}</h4>
            <img src={img} alt={name}/>
            <p>$ {price}</p>
            <p>Descripcion: {description}</p>
            {
                quantity > 0 ? (
                    <Link>Terminar compra</Link>
                ) : (
                    <ItemCount stock={stock} ondAdd={handleOnAdd}/>
                )
            }
            
        </div>
    )
}

export default ItemDetail