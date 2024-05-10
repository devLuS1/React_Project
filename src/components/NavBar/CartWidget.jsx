import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    const quantity = totalQuantity()

    return (
        <Link to="/cart" className="cartContainer">
            <IoCartOutline className="cartImg" />
            <p className="cartNumber">{ quantity > 0 && quantity }</p>
        </Link>
    )
}

export default CartWidget