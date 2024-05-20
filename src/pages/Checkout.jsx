import React, { useContext, useState } from "react";
import { myContextCart } from "../context/context";
import { useForm } from "react-hook-form";
import "./Checkout.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/conexion';

const Checkout = () => {

  const [orderId, setorderId] = useState("")
  const { cart, cleanCart, deleteItemCart, totalPrice } =
    useContext(myContextCart);

  const { register, handleSubmit } = useForm();

  const send = (data) => {
    const order = {
      client: data,
      products: cart,
      total: totalPrice(),
    }

    const ordersClient = collection(db, "orders");
    addDoc(ordersClient, order)
      .then((doc) => {
        setorderId(doc.id);
        cleanCart();
      });

  };

  if (orderId) {
    return (
      <div className="order-confirmation">
        <h2>Thank you very much for your purchase</h2>
        <p>The invoice code is: <strong>{orderId}</strong></p>

      </div>
    )
  }

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
        <p>Total price: <strong>${totalPrice()}</strong></p>
        <div className="opciones-carrito">
          <button className="vaciar-carrito" onClick={cleanCart}>Clean cart</button>
        </div>
      </div>


      <div className="carrito-derecha">
        <h2>Payment details</h2>
        <form className="datos-pago-form" onSubmit={handleSubmit(send)}>
          <label>Name:</label>
          <input type="text" {...register("name")} />

          <label>Email:</label>
          <input type="email" {...register("email")} />

          <label>Phone:</label>
          <input type="tel" {...register("phone")} />

          <label>Address:</label>
          <input type="text" {...register("address")} />

          <button className="confirm-cart" type="submit" disabled={cart.length === 0}>Confirm</button>
        </form>
      </div>



    </div>
  );
};

export default Checkout;
