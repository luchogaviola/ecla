import '../ItemListContainer/ItemListContainer.css'
// import { getProducts, getProductsByCategory} from "../../asyncMock"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

import { useAsync } from '../../hooks/useAsync'
import { useTitle } from '../../hooks/useTitle'

import { getProducts } from '../../services/firebase/firestore/products'



const ItemListContainer = ({ greeting }) => {
    useTitle('Todos los productos', [])

    const { categoryId } = useParams()

    const getProductsWithCategory = () => getProducts(categoryId)

    const { data: products, error, loading } = useAsync(getProductsWithCategory, [categoryId])


    if(loading) {
        return <h1>Cargando productos...</h1>
    }

    if(error) {
        return <h1>Hubo un error al cargas los productos</h1>
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
