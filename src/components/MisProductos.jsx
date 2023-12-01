import React, { useEffect, useState } from 'react'
import { getDataFromAPI } from '../services/productsServices';
import { Link } from 'react-router-dom';

const MisProductos = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getDataFromAPI().then((response) => setProducts(response))
    },[])

  return (
    <>
        <h1>Mis Productos:</h1>
        {products.length ? products.map( product => 
        (<div key={product.id}>
            <div>
                <h3>{product.title}</h3>
                <p>{product.category}</p>
            </div>
            <figure><img src={product.thumbnail} alt={product.title} /></figure>
            <div>
                <span>{product.price}</span>
                <span>{product.discountPercentage}</span>
            </div>
            <Link to={`/miproducto/${product.id}`}><button type='button'>Ver detalles</button></Link>
        </div>)) 
        : <h3>Cargando...</h3> }
    </>
  )
}

export default MisProductos