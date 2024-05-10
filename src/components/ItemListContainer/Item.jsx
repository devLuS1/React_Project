import { Link } from "react-router-dom";

const Item = ({ product }) => {
    return (
        <div key={product.id} className="card">
            <div className="image-card-container">
                <img className="image-card" src={product.image} alt={product.name} />
            </div>
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p className="card-price">${product.price}</p>
                <Link to={`/detail/${product.id}`} className="card-link">Details</Link>
            </div>
        </div>
    );
};
export default Item;