import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const URL_SERVER = "https://api.escuelajs.co/api/v1/products";

  useEffect(() => {
    fetch(URL_SERVER)
      .then((resp) => resp.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((e) => {
        console.log(e)
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <ItemList products={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;