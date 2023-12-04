import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../services/productsServices';
import 'bootstrap/dist/css/bootstrap.min.css';

const DetallesProducto = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
      getProductById(id).then((response)=>{
        setProduct(response);
      })
    },[id]);

  return (
    <>
      {product.title ? 
        <main>
          <article>
            <div>
              <h2>{product.title}</h2>
              <p>{product.category}</p>
            </div>
            

          </article>
          <section>
            <figure><img src={product.thumbnail}/></figure>
          </section>
        </main>
      : <div>Cargando...</div>}
    </>
    
  )
}

export default DetallesProducto