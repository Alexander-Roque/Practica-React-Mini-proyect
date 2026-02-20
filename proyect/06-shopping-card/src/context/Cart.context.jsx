import * as React from "react"
import { CartContext } from "./CartContext.context"
import { reducer, initialState } from "../reduce/cart"

function useCartReducer() {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    const addToCart = (product)=> dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart= (product)=>dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    function clearToCart(){
        return dispatch({
            type: 'CLEAR_CART',
        })
    }

    return {state, addToCart, removeFromCart, clearToCart}
}

export function CartProvite({children}){
    const {state, addToCart, removeFromCart, clearToCart} = useCartReducer();


    return (
        <>
        <CartContext.Provider value={{cart:state, addToCart, removeFromCart,clearToCart}}>
            {children}
        </CartContext.Provider>
        </>
    )
}
