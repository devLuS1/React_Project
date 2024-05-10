import React from 'react'
import Checkout from '../components/Checkout/Checkout'
import { Helmet } from 'react-helmet'

const CheckoutPage = () => {
    return (
        <div>
            <Helmet>
                <title>Snow Home | Checkout</title>
                <meta name='description' content='Finish the process of your purchase so that you can take home the products that were carefully created and designed to decorate your home. From sleek lines to luxurious materials, each item is thoughtfully curated to blend seamlessly with your unique style. Explore our range of contemporary furniture and accessories to create a home that exudes sophistication and charm.' />
            </Helmet>
            <Checkout />
        </div>
    )
}

export default CheckoutPage