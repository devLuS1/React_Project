import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { Helmet } from 'react-helmet'

const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>Snow Home | Modern Furniture Store, Home Decor & More</title>
                <meta name='description' content='Snow Home offers modern furniture and home decor featuring inspiring designs and colors. Create a stylish space with home accessories from Snow Home.' />
            </Helmet>
            <ItemListContainer productsTitle="Our products" />
        </div>
    )
}

export default HomePage