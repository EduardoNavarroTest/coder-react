import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail.jsx';
import { getDoc, doc } from "firebase/firestore";
import { db } from '../firebase/conexion';

const ItemDetailsContainer = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {

        const productDetails = doc(db, "products-list", id)
        const query = getDoc(productDetails)

        query
            .then((resp) => {
                setProduct({ ...resp.data() });
            })
            .catch((e) => console.log(e));

    }, []);

    return (
        <div>
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailsContainer;
