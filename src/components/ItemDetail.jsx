import ItemCount from "../widgets/ItemCount.jsx";
import { useState } from "react"

const Details = ({ product }) => {

  product.stock = 5;

  const [count, setCount] = useState(1);

  const handleAdd = () => {
    count < product.stock && setCount(count + 1);
  }

  const handleRemove = () => {
    count > 1 && setCount(count - 1);
  }

  const handleAddToCart = () => {
    console.log({ ...product, quantity: count });
  }


  return (

    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={product.images} alt={product.title} className="img-fluid rounded-start" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            {/* <p className="card-text"><strong>Category:</strong> {product.category.name}</p> */}
            <p className="card-text"><strong>Description:</strong> {product.description}</p>
            <p className="card-text"><strong>Price:</strong> ${product.price}</p>
            <p className="card-text"><strong>Stock:</strong> {product.stock}</p>
            <ItemCount count={count} handleAdd={handleAdd} handleRemove={handleRemove} handleAddToCart={handleAddToCart} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
