import { useForm } from 'react-hook-form';

const Clothes = () => {

  const {register, handleSubmit} = useForm();

  /*
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
  */
  /*const handleSubmit = (e) => {
    e.preventDefault();


    console.log('Formulario enviado:',  formData );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
    const handleName = (e) => {
      setName(e.target.value)
    }
  
    const handleEmail = (e) => {
      setEmail(e.target.value)
    }
  
    const handlePhone = (e) => {
      setPhone(e.target.value)
    }
  */

    const send = (data) => {
      console.log(data);
    }

  return (
    <form onSubmit={(handleSubmit(send))}>
      <div>
        <label>Nombre:</label>
        <input type="text" {...register('name')} />
      </div>
      <div>
        <label>Correo:</label>
        <input type="email" {...register('email')} />
      </div>
      <div>
        <label>Teléfono:</label>
        <input type="tel" {...register('phone')}  />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Clothes;
