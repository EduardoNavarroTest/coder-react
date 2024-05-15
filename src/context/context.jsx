import { createContext, useState } from "react";

export const myContextCart = createContext();
const Provider = myContextCart.Provider;


const CartProvider = (props) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        const itemAdded = { ...item, quantity };
        const copyCart = [...cart];
        const itemIsInCart = copyCart.find((item) => item.id === itemAdded.id);
        itemIsInCart ? itemIsInCart.quantity += quantity : copyCart.push(itemAdded);
        setCart(copyCart);
    }

    const itemIsInCart = (id) => {
        return cart.length > 0 && cart.some(item => item.id === id);
    }

    const cleanCart = () => { setCart([]); }

    const deleteItemCart = () => {
        console.log("Product delete")
    }

    const cantCart = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity, 0);
    }

    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);
    }


    const valueContext = {
        cart: cart,
        addToCart: addToCart,
        cleanCart: cleanCart,
        deleteItemCart: deleteItemCart,
        cantCart: cantCart,
        totalPrice: totalPrice,
    }

    return (
        <Provider value={valueContext}>
            {props.children}
        </Provider>
    )
}

export default CartProvider;
