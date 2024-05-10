import React from 'react'
import Cart from '../components/Cart/Cart'
import { Helmet } from 'react-helmet'

const ShoppingCartPage = () => {
    return (
        <div>
            <Helmet>
                <title>Snow Home | Shopping Cart</title>
                <meta name='description' content='Browse the products you selected to buy in the shopping cart. Decorate your home with modern furniture and home decor that elevates any space. Discover the finest selection at Snow Home.' />
            </Helmet>
            <Cart />
        </div>
    )
}

export default ShoppingCartPage