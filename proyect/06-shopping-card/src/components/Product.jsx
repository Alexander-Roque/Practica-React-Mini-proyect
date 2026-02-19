import { useCart } from "../hooks/useCart";
import { AddToCartIcon } from "./Icons";
import "./Products.css"

export function Products({products}){
    const {addToCart} = useCart()

    return(
        <main className="products">
            <ul>
                {products.slice(0,10).map((product)=>(
                    <li key={product.id}>
                        <img src={product.thumbnail}
                        alt={product.title} />
                        <div>
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div>
                            <button onClick={()=>{addToCart(product)}}>
                            <AddToCartIcon />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}
