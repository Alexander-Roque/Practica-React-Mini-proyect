import { Link } from "../Link"


export function About(){
  return(
    <>
    <h1>About</h1>
    <div>
      <img src='../public/Cori.png' alt='Foto del rey Pixie'/>
    <p>Hola soy Alex y estoy creando una ruta para React Router</p>
    </div>
    <Link to={'/'}>Ir a home</Link>
    </>
  )
}
