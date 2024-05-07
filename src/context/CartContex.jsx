import { createContext, useState } from "react";

export const CartContext = createContext();
const Provider = CartContext.Provider;

function cartProvider(props){
    const [cart, setCart] = useState([]);


    const countCart = () => {
        return cart.reduce((acc, prod) => acc + prod.quantiy, 0);
    }

    const addToCart= (count, item) => {
        


    }

    const itemInTheCart = (item) => {

    }

    const cleanCart = () => {

    }

    const deleteItemToCart = () => {

    }






}

