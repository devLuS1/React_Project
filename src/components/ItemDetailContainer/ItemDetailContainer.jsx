import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import ItemDetailLoading from "../../loading/ItemDetailLoading";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loadingDetail, setLoadingDetail] = useState(true);

    const { idProduct } = useParams()

    const getProduct = async () => {
        try {
            const docRef = doc(db, "products", idProduct);
            const dataDb = await getDoc(docRef)

            const data = { id: dataDb.id, ...dataDb.data() }

            setProduct(data)
            setLoadingDetail(false)
        } catch (error) {
            console.log('Error getting product')
        }
    }

    useEffect(() => {
        getProduct()
    }, [idProduct])

    return (
        <>
            {
                loadingDetail ? <ItemDetailLoading /> : <ItemDetail product={product} />
            }
        </>
    )
}
export default ItemDetailContainer