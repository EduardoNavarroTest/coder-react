import { myContextCart } from "../context/context.jsx";
import ToastConfig from "../utils/ToastConfig.jsx";
import ItemCount from "./widgets/ItemCount.jsx";
import { useContext, useState } from "react"
import toast from 'react-hot-toast';

const ItemDetails = ({ product }) => {

  const { addToCart } = useContext(myContextCart);
  const [count, setCount] = useState(1);

  const handleAdd = () => {
    count < product.stock && setCount(count + 1);
  }

  const handleRemove = () => {
    count > 1 && setCount(count - 1);
  }

  const handleAddToCart = (product, count) => {
    toast.success('Added successfully');
    addToCart(product, count);
  }

  return (

    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={product.images[1]} alt={product.title} className="img-fluid rounded-start" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text"><strong>Description:</strong> {product.description}</p>
            <p className="card-text"><strong>Price:</strong> ${product.price}</p>
            <p className="card-text"><strong>Stock:</strong> {product.stock}</p>
            <ItemCount count={count} handleAdd={handleAdd} handleRemove={handleRemove} handleAddToCart={() => { handleAddToCart(product, count) }} />
            <ToastConfig />

          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
