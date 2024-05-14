import { Link } from "react-router-dom";
import './ItemList.css';

const ItemList = ({ products }) => {

    return (
        <div className="item-list-container">
            {
                products.map(product => (
                    product.images[1] && /*Si el producto tiene imagen, entonces mostrarlo */
                    <div key={product.id} className="item-card">
                        <img src={product.images[1]} className="item-image" alt={product.title} />
                        <div className="item-details">
                            <h5 className="item-title">{product.title}</h5>
                            <p className="item-price">${product.price}</p>
                            <Link to={`/item/${product.id}`} className="btn btn-primary">Details</Link>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ItemList;