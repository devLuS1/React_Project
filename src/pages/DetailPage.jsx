import React from 'react'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import { Helmet } from 'react-helmet'

const DetailPage = () => {
    return (
        <div>
            <Helmet>
                <title>Snow Home | Detail Product of Furniture Store</title>
                <meta name='description' content='Explore in depth the detail of the product of your interest. Discover the finest selection of modern furniture and home decor at Snow Home. Our collection showcases meticulously crafted pieces designed to elevate any space.' />
            </Helmet>
            <ItemDetailContainer />
        </div>
    )
}

export default DetailPage