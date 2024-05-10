import { useState, useContext } from "react";
import CheckoutForm from "./CheckoutForm";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db";
import { Link } from "react-router-dom";
import validateForm from "../../utils/validationYup";
import { toast } from "react-toastify";
import "./checkout.css"
import React from 'react'

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        name: "",
        address: "",
        city: "",
        state: "",
        country: "",
        phone: "",
        email: "",
        confirmEmail: ""
    });

    const [idOrder, setIdOrder] = useState(null);
    const { cart, orderTotalPrice, emptyCart, totalPrice, totalShipping, totalTax } = useContext(CartContext);

    const handleChangeInput = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const order = {
                user: { ...dataForm },
                products: [...cart],
                total: orderTotalPrice(),
            };

            const response = await validateForm(dataForm)
            if (response.status === "Success") {
                if (dataForm.email === dataForm.confirmEmail) {
                    uploadOrder(order);
                } else {
                    toast.error('Emails should be the same')
                }
            } else {
                toast.error(response.error)
            }
        } catch (error) {
            console.log('Checkout form didn`t uploaded correctly')
        }
    };

    const uploadOrder = async (order) => {
        try {
            const ordersRef = collection(db, "orders");
            const response = await addDoc(ordersRef, order);

            setIdOrder(response.id);
            emptyCart()
        } catch (error) {
            console.log('Order didn`t uploaded correctly')
        }
    };

    return (
        <div>
            {idOrder ? (
                <div className="orderGenerated">
                    <h2 className="orderGeneratedTitle">Successfully generated order</h2>
                    <p>Soon it will be shipped</p>
                    <p className="orderGeneratedSubTitle2">Your id order is: {idOrder}</p>
                    <Link to="/" className="backHomeButton">Back to Home</Link>
                </div>
            ) : (
                <div className="checkoutContainer">
                    <div className="checkoutFormContainer">
                        <h1 className="checkoutTitle">Checkout</h1>
                        <CheckoutForm
                            dataForm={dataForm}
                            handleChangeInput={handleChangeInput}
                            handleSubmit={handleSubmit}
                        />
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
                    </div>
                </div>
            )}
        </div>
    )
}

export default Checkout