import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail.jsx';

const ItemDetailsContainer = () => {

    const {id} = useParams();
    const URL_PRODUCT = `https://api.escuelajs.co/api/v1/products/${id}`;
    const [product, setProduct] = useState({});
    console.log(id)

    useEffect(() => {
        fetch(URL_PRODUCT)
            .then((resp) => resp.json())
            .then((data) => {
                setProduct(data);
            })
            .catch((e) => {
                console.log(e)
            });
    }, []);

    return (
        <div>
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailsContainer;
