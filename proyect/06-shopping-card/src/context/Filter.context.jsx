import * as React from "react"

// Creamos el contexto
// Esto es lo que debemos consumir
export const FiltersContext = React.createContext()

//Creamos el provider para proveer el contexto
// Nos provee de acceso al contexto
export function FiltersProvider ({children}) {
    return(
        <FiltersContext.Provider value={{
            category : "all",
            mainPrice: 0
        }}>
            {children}
        </FiltersContext.Provider>
    )
}
