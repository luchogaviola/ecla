import '../ItemListContainer/ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory} from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'



const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
      document.title = 'Todos los productos'
  }, [])

  useEffect(() => {
      setLoading(true)
      
      const asyncFunction = categoryId ? getProductsByCategory : getProducts

      asyncFunction(categoryId).then(response => {
          setProducts(response)
      }).catch(error => {
          console.log(error)
      }).finally(() => {
          setLoading(false)
      })          
  }, [categoryId])


  if(loading) {
      return <h1>Cargando productos...</h1>
  }
  

  return (
        <main>
            <h2 className="titulo-principal">{greeting}</h2>
            <div className="contenedor-productos">
                
            <ItemList products={products}/>
            

            </div>
            
        </main>
  )
}

export default ItemListContainer;
