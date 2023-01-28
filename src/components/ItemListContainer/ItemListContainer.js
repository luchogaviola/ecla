import '../ItemListContainer/ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory} from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'



const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

  useEffect(() => {
    const asyncFunction = categoryId ? getProductsByCategory : getProducts
   
    asyncFunction(categoryId)
      .then(products => {
          setProducts(products)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  

  return (
        <main>
            <h2 className="titulo-principal">{greeting}</h2>
            <div className="contenedor-productos">
                
            <ItemList products={products}/>
            <ItemCount onAdd={(count) => console.log('se agregaron' + count)} stock={10}/>

            </div>
            
        </main>
  )
}

export default ItemListContainer;
