import * as React from "react"
import { CartContext } from "./CartContext.context"


const initialState = [];
function reducer(state, action){

    const {type:actionType, payload:actionPayload} = action;

    switch(actionType){
        case 'ADD_TO_CART':{
            const {id} = actionPayload
            const productInCartIndex = state.findIndex(item=>item.id === id)

            if(productInCartIndex >= 0) {
            const newState = structuredClone(state);
            newState[productInCartIndex].quantity += 1;
            return newState
        }

        return [
            ...state,
            {
                ...actionPayload,
                quantity: 1
            }
        ]
        }
        case 'REMOVE_FROM_CART': {
            const {id} = actionPayload
            return state.filter(item => item.id !== id)
        }
        case 'CLEAR_CART': {
            return initialState
        }
    }
    return state
}


export function CartProvite({children}){
    // const [cart, setCart] = React.useState([])

    const [state, dispatch]=  React.useReducer(reducer, initialState)

    const addToCart = (product)=> dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart= ()=>dispatch({
        type: 'REMOVE_FROM_CART'
    })

    function clearToCart(product){
        return dispatch({
            type: 'CLEAR_CART',
            payload: product
        })
    }
    console.log(state)

    return (
        <>
        <CartContext.Provider value={{cart:state, addToCart, removeFromCart,clearToCart}}>
            {children}
        </CartContext.Provider>
        </>
    )
}
