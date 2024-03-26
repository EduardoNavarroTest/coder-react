import 'bootstrap/dist/css/bootstrap.min.css';
import './CartWidget.css';

const CartWidget = () => {
    const itemCount = 5;
  
    return (
      <div className="cart-widget">
        <img id="icon-cart-shop" src="/bag-check-fill.svg" alt="Cart Icon" />
        <span className="badge bg-primary">{itemCount}</span>
      </div>
    );
  };
  
  export default CartWidget;