import React from 'react'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import { Helmet } from 'react-helmet'

const CategoriesPage = () => {
    return (
        <div>
            <Helmet>
                <title>Snow Home | Categories of Modern Furniture Store</title>
                <meta name='description' content='Find modern furniture for every room in your home that complements your style. Contemporary pieces from Snow Home are designed with clean, elegant lines and an array of modern materials that are sure to stand the test of time.' />
            </Helmet>
            <ItemListContainer productsTitle="Our products" />
        </div>
    )
}

export default CategoriesPage