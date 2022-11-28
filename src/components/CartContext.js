import { createContext, useState } from 'react'
import product from "../Product.json"

export const CartContext = createContext();

export function CartProvider(props){
    const [Total, setTotal] = useState(0)
    const [CantProductos, setCantProductos] = useState(0)
    const [cartItems, setCartItems] = useState([])

    const AddToCart = (elemento) =>{
        let newArray = structuredClone(cartItems);
        newArray.push(structuredClone(elemento));
        setCartItems(newArray);
    }

    const DeleteFromCart = (elemento) => {
        let newArray = [];
        cartItems.map(
            (item) => {
                if(item.id != elemento.id){
                    newArray.push(item);
                }
            }
        )
        setCartItems(newArray);

    }
    

    return (<CartContext.Provider
        value={{
            Total,
            setTotal,
            CantProductos,
            setCantProductos,
            cartItems,
            AddToCart,
            DeleteFromCart
        }}>
            {props.children}
        </CartContext.Provider>);
}