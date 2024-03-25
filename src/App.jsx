import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
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
6- Son reutilizables
7- Se busca aislar partes de la aplicación
8- Componenetes van solos en sus archivos


*/