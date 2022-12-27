import '../ItemListContainer/ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
  return (
        <main>
            <h2 className="titulo-principal">{greeting}</h2>
            <div className="contenedor-productos">
                
            </div>
            
        </main>
  )
}

export default ItemListContainer;
