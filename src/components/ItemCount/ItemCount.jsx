import './itemCount.css'
import { useState } from "react";

const ItemCount = ({ handleAddToCart, stock }) => {
    const [count, setCount] = useState(1);

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleSubtract = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <div className="itemCount">
                <button onClick={handleSubtract}>-</button>
                <p> {count} </p>
                <button onClick={handleAdd}>+</button>
            </div>
            <div>
                <button className="addToCart" onClick={() => handleAddToCart(count)} >Add to Cart</button>
            </div>
        </div>
    );
};
export default ItemCount;