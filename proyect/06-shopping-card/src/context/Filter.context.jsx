import * as React from "react"
import { FiltersContext } from "./FilterContext.context"

//Creamos el provider para proveer el contexto
// Nos provee de acceso al contexto
export function FiltersProvider ({children}) {
    const [filters, setFilters] = React.useState({
        category : "all",
        minPrice: 0
    })

    return(
        <FiltersContext.Provider value={{filters, setFilters}}>
            {children}
        </FiltersContext.Provider>
    )
}
