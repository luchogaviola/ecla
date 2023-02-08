import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({ id, name, img, price }) => {

  

  return (
    
        <article className="CardItem">
           
            
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <div className='div-item'>
            <h2 className="ItemHeader">
                    {name}
                </h2>
                <p className="Info">
                    Precio: ${price}
                </p>
                <footer className='ver-detalle'>
                <Link to={`/detail/${id}`} className='option'>Ver detalle</Link>
            </footer>
            </div>           
           
        </article>
    
  )
}

export default Item