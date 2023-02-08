import '../ItemCart/ItemCart.css'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import CartList from '../CartList/CartList'

const Cart = ({ greeting }) => {
    const { cart } = useContext( CartContext )
    return (
       <main>
            <h2 className="titulo-principal">{greeting}</h2>
            <div className="contenedor-productos">
                
                <CartList cart={cart}/>
                       

            </div>
       </main>
    )
}

export default Cart