import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';
import { CartContext } from '../context/CartContex';
import { useState } from 'react';

function App() {

  return (

    <BrowserRouter>

      <CartContext.Provider>
        <div className="main-content">
          <Header />
          <Main />
        </div>
        <Footer />

      </CartContext.Provider>
    </BrowserRouter>


  );
}

export default App;
