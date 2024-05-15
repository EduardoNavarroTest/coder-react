import React from 'react';
import { useContext } from 'react';
import { myContextCart } from '../context/context';
import './Checkout.css';

const Checkout = () => {
  const { cart, cleanCart, deleteItemCart, totalPrice } = useContext(myContextCart);

  return (
    <div className="carrito-container">
      <div className="carrito-izquierda">
        <h2>Carrito de Compras</h2>
        <ul className="productos-lista">
          {cart.map((product) => (
            <li key={product.id}>
              <span>{product.title}</span> 
              <span> - {product.quantity}</span> 
              <span> - ${product.price * product.quantity}</span>
              <button className="eliminar-producto" onClick={deleteItemCart}>
            Delete
          </button> 
            </li>
          ))}
        </ul>
        <p>Total a pagar: ${totalPrice()}</p>
        <div className="opciones-carrito">
                    <button className="vaciar-carrito" onClick={cleanCart}>
            Vaciar Carrito
          </button>
        </div>
      </div>

      {/* Derecha: Datos de pago */}
      <div className="carrito-derecha">
        <h2>Datos de Pago</h2>
        <form className="datos-pago-form">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />

          {/* Agrega más campos de datos de pago aquí */}
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
