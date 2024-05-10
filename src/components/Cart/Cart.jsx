import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { BsXLg } from "react-icons/bs";
import EmptyCart from './EmptyCart';
import { Link } from "react-router-dom";
import "./cart.css"

const Cart = () => {

    const { cart, emptyCart, deleteProductById, totalPrice, totalShipping, totalTax, orderTotalPrice } = useContext(CartContext)

    if (cart.length === 0) {
        return <EmptyCart />
    }

    return (
        <div className="cart">
            <div className="shoppingCart">
                <div className="shoppingCartTitle">
                    <h1>Shopping Cart</h1>
                    <button className="emptyCartButton" onClick={emptyCart} >Empty cart</button>
                </div>
                <div className="cartProducts">
                    {cart.map((product) => (
                        <div key={product.id} className="cartProduct">
                            <img className="cartProductImg" src={product.image} />
                            <div className="infoCartProduct">
                                <p className="infoCartProductName">{product.name}</p>
                                <div className="infoCartProductDetail">
                                    <p className="infoCartProductText">Item Price: ${product.price}</p>
                                    <p className="infoCartProductText">Quantity: {product.quantity}</p>
                                    <p className="infoCartProductText">Item Total: ${product.quantity * product.price}</p>
                                </div>
                            </div>
                            <div className="deleteCartButton">
                                <button onClick={() => deleteProductById(product.id)} ><BsXLg />Remove</button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            <div className="cartSummary">
                <h2 className="cartSummaryTitle">Order Summary</h2>
                <div className="cartSummarySubtotal">
                    <p className="cartSummaryText">Subtotal</p>
                    <p className="cartSummaryText">${totalPrice()}</p>
                </div>
                <div className="cartSummaryShipping">
                    <p className="cartSummaryText">Est. Shipping</p>
                    <p className="cartSummaryText">${totalShipping()}</p>
                </div>
                <div className="cartSummaryTax">
                    <p className="cartSummaryText">Est. Tax</p>
                    <p className="cartSummaryText">${totalTax()}</p>
                </div>
                <div className="cartSummaryOrderTotal">
                    <p className="cartSummaryTextTotal">Est. Order Total</p>
                    <p className="cartSummaryTextTotal">${orderTotalPrice()}</p>
                </div>

                <Link to="/checkout" className="cartSummaryButton">Checkout</Link>
            </div>

        </div>
    )
}

export default Cart