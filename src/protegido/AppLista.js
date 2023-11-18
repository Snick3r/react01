import React from 'react'
import AppForm from './AppForm'

const AppLista = () => {
  return (
    <div style={{background:"greenyellow", padding:"10px"}}>
      <h1>AppList.js</h1>
        <AppForm/>
      <h3>Lista de Clientes</h3>
      <p>No. 1 Juan Manuel Polar ..... x ...... A</p>
      <p>No. 2 Ricardo Palma ..... x ...... A</p>
      <p>No. 3 Mario Vargas Llosa ..... x ...... A</p>
    </div>
  )
}

export default AppLista
