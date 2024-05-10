import React from 'react'
import "./checkout.css"

const CheckoutForm = ({ dataForm, handleChangeInput, handleSubmit }) => {
    return (
        <form className="checkoutForm" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={dataForm.name} onChange={handleChangeInput} />

            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" value={dataForm.address} onChange={handleChangeInput} />

            <div className="addressDetailsContainer">
                <div className="addressDetailsCity">
                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" name="city" value={dataForm.city} onChange={handleChangeInput} />
                </div>
                <div className="addressDetailsState">
                    <label htmlFor="state">State:</label>
                    <input type="text" id="state" name="state" value={dataForm.state} onChange={handleChangeInput} />
                </div>
                <div className="addressDetailsCountry">
                    <label htmlFor="country">Country:</label>
                    <input type="text" id="country" name="country" value={dataForm.country} onChange={handleChangeInput} />
                </div>
            </div>

            <label htmlFor="phone">Phone:</label>
            <input type="phone" id="phone" name="phone" value={dataForm.phone} onChange={handleChangeInput} />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={dataForm.email} onChange={handleChangeInput} />

            <label htmlFor="confirmEmail">Confirm Email:</label>
            <input type="email" id="confirmEmail" name="confirmEmail" value={dataForm.confirmEmail} onChange={handleChangeInput} />

            <button type="submit">Submit Order</button>
        </form>
    )
}

export default CheckoutForm