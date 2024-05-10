import React from 'react'
import { useForm } from "react-hook-form";
import "./contact.css"

const Contact = () => {
    const { register, handleSubmit } = useForm();

    const submit = (data) => {
        console.log(data);
    }

    return (
        <div className="contactContainer">
            <div className="formContactContainer">
                <h1 className="contactTitle">Contact us</h1>
                <form className="form" onSubmit={handleSubmit(submit)}>
                    <input type="text" placeholder="Name" {...register("name")} />
                    <input type="phone" placeholder="Phone" {...register("phone")} />
                    <input type="email" placeholder="Email" {...register("email")} />
                    <textarea id="textArea" placeholder="Message" rows="15" name="textArea" {...register("message")}></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="infoContactContainer">
                <h2>Store Locations</h2>
                <div class="infoContact1">
                    <h3>New York</h3>
                    <p>250 Greenwich Street</p>
                    <p>New York, New York 10007, USA</p>
                    <p>+1 212 298 9300</p>
                </div>
                <div class="infoContact2">
                    <h3>London</h3>
                    <p>20 Primrose Street</p>
                    <p>London EC2A 2EW, UK</p>
                    <p>+44 207 798 1000</p>
                </div>
            </div>
        </div>
    )
}

export default Contact