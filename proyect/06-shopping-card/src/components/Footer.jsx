import "./Footer.css"

export function Footer({filters}) {
    return(
        <footer className="footer">
            {
                JSON.stringify(filters, null, 2)
            }
            {/* <h4>Prueba tecnica de React * - <span>@Alexander-Junior</span></h4>
            <h5>Shopping Cart con useContext & useReducer</h5> */}
        </footer>
    )
}


// Para utilizar correctamente el useContext debemos:
// 1. Crear el contexto
// 2. Proveer el contexto con provier
// 3. Consumir el contexto (componente que desee consumir)
