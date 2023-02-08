import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailContainer = ({setCart}) => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    document.title = "Detalle del producto";
  }, []);

  useEffect(() => {
    getProductById(productId)
      .then((response) => {
        setProduct(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <main>
      <h1 className='titulo-detail'>Detalle de {product.name}</h1>
      
      <div className="ItemDetailContainer">
        <ItemDetail {...product} setCart={setCart}/>
      </div>
    </main>
  );
};

export default ItemDetailContainer;
