import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./itemDetailContainer.css";

const ItemDetail = ({ product }) => {
    const { cart, addToCart } = useContext(CartContext)
    const [clickAddToCart, setClickAddToCart] = useState(false)

    console.log(cart)

    const handleAddToCart = (count) => {
        const productCart = { ...product, quantity: count }
        addToCart(productCart)
        setClickAddToCart(true)
        toast.success('Product added to cart')
    }

    return (
        <div className="item-detail">
            <div className="image-detail">
                <img src={product.image} />
            </div>
            <div className="text-detail">
                <h1 className="name-detail">{product.name}</h1>
                <p className="description-detail">{product.description}</p>
                <p className="price-detail">${product.price}</p>
                {clickAddToCart ? (
                    <>
                        <Link to="/cart" className="clickAddToCart">View cart</Link>
                        <Link to="/" className="clickAddToCart">Continue Shopping</Link>
                    </>
                ) : <ItemCount handleAddToCart={handleAddToCart} stock={product.stock} />
                }
            </div>
        </div>
    )
}
export default ItemDetail