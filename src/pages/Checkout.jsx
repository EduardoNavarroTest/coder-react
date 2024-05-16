import React, { useContext } from "react";
import { myContextCart } from "../context/context";
import { useForm } from "react-hook-form";
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
        <h2>Carrito de Compras</h2>
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
        <p>Total price: ${totalPrice()}</p>
        <div className="opciones-carrito">
          <button className="vaciar-carrito" onClick={cleanCart}>Clean cart</button>
        </div>
      </div>

      <div className="carrito-derecha">
        <h2>Datos de Pago</h2>
        <form className="datos-pago-form" onSubmit={handleSubmit(send)}>
          <label>Name:</label>
          <input type="text" {...register("name")} />

          <label>Email:</label>
          <input type="email" {...register("email")} />

          <label>Phone:</label>
          <input type="tel" {...register("phone")} />

          <label>Addres:</label>
          <input type="text" {...register("addres")} />

          <button className="confirm-cart" type="submit">Confirm</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;

// const Clothes = () => {

//   const {register, handleSubmit} = useForm();

//   /*
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//   */
//   /*const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log('Formulario enviado:',  formData );
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//     const handleName = (e) => {
//       setName(e.target.value)
//     }

//     const handleEmail = (e) => {
//       setEmail(e.target.value)
//     }

//     const handlePhone = (e) => {
//       setPhone(e.target.value)
//     }
//   */

//     const send = (data) => {
//       console.log(data);
//     }

//   return (
//     <form onSubmit={(handleSubmit(send))}>
//       <div>
//         <label>Nombre:</label>
//         <input type="text" {...register('name')} />
//       </div>
//       <div>
//         <label>Correo:</label>
//         <input type="email" {...register('email')} />
//       </div>
//       <div>
//         <label>Teléfono:</label>
//         <input type="tel" {...register('phone')}  />
//       </div>
//       <button type="submit">Enviar</button>
//     </form>
//   );
// };

// export default Clothes;
