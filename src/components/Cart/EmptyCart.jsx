import React from 'react'
import { Link } from "react-router-dom";
import "./cart.css"

const EmptyCart = () => {
    return (
        <div className="shoppingCartEmpty">
            <h1 className="shoppingCartEmptyTitle">Shopping Cart</h1>
            <p>Hi! Looks like your cart's empty...</p>
            <p className="shoppingCartEmptyText2">When you add products to your shopping cart, they will appear here.</p>
            <Link to={`/`} className="startShoppingButton">Start Shopping</Link>
        </div>
    )
}

export default EmptyCart