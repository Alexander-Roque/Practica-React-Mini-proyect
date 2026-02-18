import {products as initialProducts} from "./mock/products.json"
import {Products} from './components/Product.jsx'
import * as React from "react"
import Header from "./components/Headers.jsx";
import { Footer } from "./components/Footer.jsx";
import { FiltersContext } from "./context/Filter.context.jsx";

function useFilters(){
  // const [filters, setFilter] = React.useState({
  //   category :"all",
  //   minPrice: 0
  // })
  const filters = React.useContext(FiltersContext)
  console.log(filters)
  const setFilters = () => {}

  function filterProducts(products){
    return products.filter(product =>{
      return(
        product.price >= filters.minPrice && (
          filters.category === "all" || product.category === filters.category
        )
      )
    })
  }

  return {filters, filterProducts, setFilters}
}

function App() {
  const [products] = React.useState(initialProducts);

  const {filters, filterProducts, setFilter} = useFilters()

  // este es el problema
  const filteredProducts = filterProducts(products)
  // console.log(filteredProducts)

  return (
    <>
    <Header changeFilter={setFilter} />
      <Products products={filteredProducts} />
      <Footer filters={filters} />
    </>
  )
}

export default App
