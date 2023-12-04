import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import MiContador from '../components/MiContador'
import MiComponente from '../components/MiComponente'
import MisProductos from '../components/myProducts/MisProductos'
import DetallesProducto from '../components/productDetails/DetallesProducto'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MiComponente/>}/>
          <Route path="/micomponente" element={<MiComponente/>}/>
          <Route path="/micontador" element={<MiContador/>}/>
          <Route path="/misproductos" element={<MisProductos/>}/>
          <Route path="/miproducto/:id" element={<DetallesProducto/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter