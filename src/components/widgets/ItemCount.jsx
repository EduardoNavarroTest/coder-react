import './ItemCount.css'

const ItemCount = ({ count, handleAdd, handleRemove, handleAddToCart }) => {

    return (
        <div className="item">
            <div className="item-count">
                <button onClick={handleRemove}>-</button>
                <p>{count}</p>
                <button onClick={handleAdd}>+</button>
            </div>
            <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>

        </div>
    )
}

export default ItemCount;
