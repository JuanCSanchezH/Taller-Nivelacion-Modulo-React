import React from 'react'
import { useParams } from 'react-router-dom'

const DetallesProducto = () => {

    const { id } = useParams();

  return (
    <div>DetallesProducto con ID: {id}</div>
  )
}

export default DetallesProducto