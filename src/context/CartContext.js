import { useState, createContext } from "react"

export const CartContext = createContext({
  cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
          setCart(prev => {return [...prev, productToAdd]})
        }
    }

    const isInCart = (id) => cart.some(prod => id === prod.id)

    const removeItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id !== id)
        setCart(cartUpdated)
    }

    const getTotalQuantity = () => {
      let accu = 0

      cart.forEach(prod => {
        accu += prod.quantity
      })

      return accu
    }

    const totalQuantity = getTotalQuantity()

    return (
        <CartContext.Provider value={{addItem, isInCart, totalQuantity, cart, removeItem}}>
            { children }
        </CartContext.Provider>
    )
}