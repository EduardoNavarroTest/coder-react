import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <header> <h1 id="titulo" className='titulo header__titulo'>Hola mundo desde React</h1>
        <nav>
          <a href="#">Reloj</a>
          <a href="#">Carrito</a>
          <a href="#">Detalles</a>
        </nav>
      </header>

      <main>
        <h2>Esto es un main</h2>
      </main>

      <footer>
        <p>Copyright 2024</p>
      </footer>
    </>

  )
}

export default App


/*
1- Dan salida en pantalla
2- Siempre son funciones
3- Siempre tienen un retorno
4- Se nombran con PascalCase
5- Se crean los componentes por a parte y se exportan para que otro archivo los use


*/