import { Link } from "../Link"

export default function HomePage() {
  return (
    <>
    <h1>Home</h1>
    <p>Esta es una pagina de ejemplo para mostrar el funcionamiento de React Router</p>
    <Link to='/about'>Ir a Nosotros</Link>
    </>
  )
}
