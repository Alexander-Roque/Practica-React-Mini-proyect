import * as React from "react"
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons"
import "./Cart.css"

export function Cart() {
    // const [buy, setBuy] = React.useState()
    const CartCheckBox = React.useId()

    return(
        <>
        <label className="cart-button" htmlFor={CartCheckBox}>
            <CartIcon />
        </label>
        <input id={CartCheckBox} type="checkbox" hidden/>

        <aside className="cart">
            <ul>
                <li>
                    <img
                    src="https://cdn.dummyjson.com/product-images/6/thumbnail.png"
                    alt="Portatil"
                     />
                     <div>
                        <strong>iPhone</strong> - $1499
                     </div>
                     <footer>
                        <small>
                            Qty: 1
                        </small>
                        <button>
                            +
                        </button>
                     </footer>
                </li>
            </ul>
            <button className="cart-button">
                <RemoveFromCartIcon />
            </button>
        </aside>

        </>
    )
}
