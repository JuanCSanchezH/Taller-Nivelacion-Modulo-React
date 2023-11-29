import React from 'react'
import { Routes } from 'react-router-dom'
import MiComponente from '../components/MiComponente'

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/micomponente" element={<MiComponente/>}></Route>
    </Routes>
  )
}

export default AppRouter