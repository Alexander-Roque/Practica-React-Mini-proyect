import * as React from "react"
import { CartContext } from "./CartContext.context"


export function CartProvite({children}){
    const [cart, setCart] = React.useState([])


    function addToCart(product){
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if(productInCartIndex >= 0) {
            const newCart = structuredClone(cart);
            newCart[productInCartIndex].quantity += 1;
            return setCart(newCart)
        }

        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
    }
 
    function clearToCart(){
        setCart([])
    }

    return (
        <>
        <CartContext.Provider value={{cart, addToCart, clearToCart}}>
            {children}
        </CartContext.Provider>
        </>
    )
}
