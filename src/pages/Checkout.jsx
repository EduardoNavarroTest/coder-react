import React, { useContext } from "react";
import { myContextCart } from "../context/context";
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import ToastConfig from "../utils/ToastConfig.jsx";
import "./Checkout.css";

const Checkout = () => {
  const { cart, cleanCart, deleteItemCart, totalPrice } =
    useContext(myContextCart);

  const { register, handleSubmit } = useForm();

  const send = (data) => {
    console.log(data);
  };

  return (

    <div className="carrito-container">

      <div className="carrito-izquierda">
        <h2>Shopping Cart</h2>
        <ul className="productos-lista">
          {cart.map((product) => (
            <li key={product.id}>
              <span><strong>{product.title}</strong></span>
              <span>Cant: {product.quantity}</span>
              <span>${product.price * product.quantity}</span>
              <button className="eliminar-producto" onClick={() => deleteItemCart(product.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <strong><p>Total price: ${totalPrice()}</p></strong>
        <div className="opciones-carrito">
          <button className="vaciar-carrito" onClick={cleanCart}>Clean cart</button>
        </div>
      </div>

      <div className="carrito-derecha">

        <h2>Payment details</h2>
        <form className="datos-pago-form" onSubmit={handleSubmit(send)}>
          <label>Name:</label>
          <input type="text" {...register("name", { required: "required" })} />

          <label>Email:</label>
          <input type="email" {...register("email", { required: "required" })} />

          <label>Phone:</label>
          <input type="tel" {...register("phone", { required: "required" })} />

          <label>Addres:</label>
          <input type="text" {...register("address", { required: "required" })} />

          <button className="confirm-cart" type="submit" disabled={cart.length === 0}>Confirm</button>
        </form>

      </div>

    </div>

  );
};

export default Checkout;