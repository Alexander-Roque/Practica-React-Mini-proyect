import {Filter} from "./Filter.jsx"
import { AddToCartIcon } from "./Icons";


export default function Header () {
    return (
        <header>
            <h1>React Shop<AddToCartIcon /></h1>
            <Filter />
        </header>
    )
}
