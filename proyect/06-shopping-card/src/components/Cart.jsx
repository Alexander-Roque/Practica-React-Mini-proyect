import * as React from "react"
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons"
import "./Cart.css"
import { useCart } from "../hooks/useCart"

function CartItem({thumbnail, price, title, quantity, addToCart}) {
    return(
        <li>
            <img
            src={thumbnail}
            alt={title}
            />
            <div>
                <strong>{title}</strong> - {price}
            </div>
            <footer>
                <small onClick={addToCart}>
                    Qty: {quantity}
                </small>
                <button>
                    +
                </button>
            </footer>
        </li>
    )
}

export function Cart() {
    // const [buy, setBuy] = React.useState()
    const CartCheckBox = React.useId()
    const {cart, clearToCart, addToCart} = useCart()

    return(
        <>
        <label className="cart-button" htmlFor={CartCheckBox}>
            <CartIcon />
        </label>
        <input id={CartCheckBox} type="checkbox" hidden/>

        <aside className="cart">
            <ul>
                {cart.map((product)=>
                    <CartItem key={product.id} addToCart={()=>addToCart(product)} {...product} />

                )}
            </ul>
            <button onClick={clearToCart}>
                <RemoveFromCartIcon />
            </button>
        </aside>

        </>
    )
}
