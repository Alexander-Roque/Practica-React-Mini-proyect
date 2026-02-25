import * as React from "react"


export default function SearchDinamy ({routeParams}) {
    React.useEffect(()=>{
        document.title = `Has buscado ${routeParams.query}`
    },[routeParams])


    return(
        <>
        <h1>Has buscado {routeParams.query}</h1>
        </>
    )
}
