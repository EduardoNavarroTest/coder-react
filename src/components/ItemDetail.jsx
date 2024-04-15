import React from 'react'

const Details = ({ product }) => {


  return (

    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={product.images} alt={product.title} className="img-fluid rounded-start" /> 
          {console.log("PRODUCTOOOOOOOO" + product.images)}
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            {/* <p className="card-text"><strong>Category:</strong> {product.category.name}</p> */}
            <p className="card-text"><strong>Description:</strong> {product.description}</p>
            <p className="card-text"><strong>Price:</strong> ${product.price}</p>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details
