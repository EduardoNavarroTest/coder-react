import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from '../context/context';

function App() {

  return (

    <BrowserRouter>
      <CartProvider>

        <div className="main-content">
          <Header />
          <Main />
        </div>

      </CartProvider>
      <Footer />
    </BrowserRouter>


  );
}

export default App;
