const ProductCard = (props) => {
  return (
    <div className="col-md-4">
      <div className="card" style={{ width: "100%" }}>
        <img src={props.productImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.productName}</h5>
          <p className="card-text">{props.productPrice}</p>
          <p className="card-text">{props.productDesc}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
