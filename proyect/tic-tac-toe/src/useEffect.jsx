import * as React from "react"

function Component () {
    const [value, setValue] = React.useState(false)

    // useEffect(Funcion a ejecutar, lista de dependencias)

    React.useEffect(()=>{
        console.log("holi :3")
    })
}