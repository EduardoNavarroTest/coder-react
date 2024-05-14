import 'bootstrap/dist/css/bootstrap.min.css';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { myContextCart } from '../../context/context';

const CartWidget = () => {

  const valueContext = useContext(myContextCart);


  return (
    <div className="cart-widget">
      <Link className='menu-link' to="/cart">
        <img id="icon-cart-shop" src="/bag-check-fill.svg" alt="Cart Icon" />
        <span className="badge bg-primary">{valueContext.cantCart()}</span>
      </Link>
    </div>
  );
};

export default CartWidget;