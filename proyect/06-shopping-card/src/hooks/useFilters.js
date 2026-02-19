import * as React from "react"
import { FiltersContext } from "../context/FilterContext.context"


export function useFilters(){
  const {filters, setFilters} = React.useContext(FiltersContext)
  
  console.log(filters)

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
