import { createContext, useState } from "react";

export const context = createContext();
const Provider = context.Provider;


const CartProvider = (props) => {

    const [cart, setCart] = useState([]);

    const valueContext = {
        cart: cart,
    }

    const addToCart = (count, item) => {

    }

    const itemIsInCart = (item) => {

    }

    const cleanCart = () => { setCart([]); }

    const deleteItemCart = () => {

    }

    return (
        <Provider value={valueContext}>
            {props.children}
        </Provider>
    )
}

export default CartProvider;
