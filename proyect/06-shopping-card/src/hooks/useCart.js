import * as React from "react"
import { CartContext } from "../context/CartContext.context"

export function useCart() {
    const context = React.useContext(CartContext);

    if(context === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }

    return context
}
