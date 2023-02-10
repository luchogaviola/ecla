import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({ initial = 1, stock, onAdd }) => {

  const [count, setCount] = useState(initial)

  const decrement = () => {
    if (count > 1) {
      setCount(prev => prev - 1)
    }
  }

  
  const increment = () => {
    if (count < stock) {
      setCount(prev => prev + 1)
    }
  }
 
  return (
    <div className='padding-count'>
      <p className='cantidad-title'>Cantidad</p>
      
      <div className='item-count'>
      <button className='button-inc' onClick={decrement}>-</button>
      <h2>{count}</h2>
      <button className='button-inc' onClick={increment}>+</button>
      </div>
     
      <button className='add-cart' onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;