import { createContext, useState } from "react"
import { toast } from "react-toastify";

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (newProduct) => {
        const productIsInCart = isInCart(newProduct.id)
        if (productIsInCart) {
            const productsMod = cart.map((productCart) => {
                if (productCart.id === newProduct.id) {
                    return { ...productCart, quantity: productCart.quantity + newProduct.quantity }
                } else {
                    return productCart
                }
            })
            setCart(productsMod)

        } else {
            setCart([...cart, newProduct])
        }
    }

    const isInCart = (productId) => {
        const productIsInCart = cart.some((product) => product.id === productId)
        return productIsInCart
    }

    const totalQuantity = () => {
        const quantity = cart.reduce((total, product) => total + product.quantity, 0)
        return quantity
    }

    const emptyCart = () => {
        setCart([])
    }

    const deleteProductById = (productId) => {
        const productsFilter = cart.filter((productCart) => productCart.id !== productId)
        setCart(productsFilter)
        toast.info('Deleted product')
    }

    const totalPrice = () => {
        const total = cart.reduce((total, product) => total + (product.quantity * product.price), 0)
        return total
    }

    const totalShipping = () => {
        const shipping = cart.reduce((total, product) => total + Math.round((product.quantity * product.price) * 0.12), 0)
        return shipping
    }

    const totalTax = () => {
        const tax = cart.reduce((total, product) => total + Math.round((product.quantity * product.price) * 0.075), 0)
        return tax
    }

    const orderTotalPrice = () => {
        const orderTotal = cart.reduce((total, product) => total + (product.quantity * product.price) + Math.round((product.quantity * product.price) * 0.12) + Math.round((product.quantity * product.price) * 0.075), 0)
        return orderTotal
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, totalQuantity, emptyCart, deleteProductById, totalPrice, totalShipping, totalTax, orderTotalPrice }} >
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }