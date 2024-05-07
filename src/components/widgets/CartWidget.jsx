import 'bootstrap/dist/css/bootstrap.min.css';
import './CartWidget.css';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const itemCount = 5;

  return (
    <div className="cart-widget">
      <Link className='menu-link' to="/cart">
        <img id="icon-cart-shop" src="/bag-check-fill.svg" alt="Cart Icon" />
        <span className="badge bg-primary">{itemCount}</span>
      </Link>
    </div>
  );
};

export default CartWidget;