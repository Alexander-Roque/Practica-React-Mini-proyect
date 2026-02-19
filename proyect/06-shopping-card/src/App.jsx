import {products as initialProducts} from "./mock/products.json"
import {Products} from './components/Product.jsx'
import * as React from "react"
import Header from "./components/Headers.jsx";
import { Footer } from "./components/Footer.jsx";
import { useFilters } from "./hooks/useFilters.js";
import { Cart } from "./components/Cart.jsx";
import { CartProvite } from "./context/Cart.context.jsx";


function App() {
  const [products] = React.useState(initialProducts);

  const {filterProducts} = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
    <CartProvite>
    <Cart />
    <Header />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvite>
    </>
  )
}

export default App
