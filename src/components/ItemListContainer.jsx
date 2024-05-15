import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { collection, getDocs, getFirestore, query, where, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase/conexion';
import 'bootstrap/dist/css/bootstrap.min.css';


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  let queryRequest;
  let categoryId;
  const { id } = useParams();

  useEffect(() => {

    id && (categoryId = getCategoryId(id)) //Si existe parámetro de categoria en la url => recuperamos el codigo númerico dependiendo de su nombre

    const productsCollection = collection(db, "products-list")

    queryRequest = categoryId ? getDocs(query(productsCollection, where("category.id", "==", categoryId))) : getDocs(productsCollection);

    queryRequest
      .then((resp) => {
        setProducts(resp.docs.map((doc) => {
          return { ...doc.data() }
        }));
      })
      .catch((e) => console.log(e));

  }, [id]);


  //Función para recuperar el id de la categoría dependiendo de su nombre
  const getCategoryId = (name) => {
    let category;

    switch (name) {
      case "clothes":
        category = 1;
        break;
      case "electronics":
        category = 2;
        break;
      case "shoes":
        category = 4;
        break;
      case "miscellaneous":
        category = 5;
        break;
      default:
        category = 0;
        break;
    }

    return category;

  }


  return (
    <div className="container">
      <div className="row">
        <ItemList products={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;