import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Hero from "../Hero/Hero";
import ItemListLoading from "../../loading/ItemListLoading";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db";
import React from 'react'
import "./itemListContainer.css"

const ItemListContainer = ({ productsTitle }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { idCategory } = useParams()

  const getProducts = async () => {
    try {
      const dataDb = await getDocs(collection(db, "products"));

      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() }
      })

      setProducts(data)
      setLoading(false)
    } catch (error) {
      console.log('Error getting products')
    }
  }

  const getProductsByCategory = async () => {
    try {
      const q = query(collection(db, "products"), where("category", "==", idCategory));

      const dataDb = await getDocs(q);

      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() }
      })

      setProducts(data)
      setLoading(false)
    } catch (error) {
      console.log('Error getting products by categories')
    }
  }

  useEffect(() => {
    if (idCategory) {
      getProductsByCategory()
    } else {
      getProducts()
    }
  }, [idCategory]);

  return (
    <div className="itemListContainer">
      <Hero />
      <h1 className="productsTitle" >{productsTitle}</h1>
      {
        loading ? <ItemListLoading /> : <ItemList products={products} />
      }
    </div>
  )
}

export default ItemListContainer