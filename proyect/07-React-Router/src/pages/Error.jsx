import { Link } from "../Link"

export default function Error404 () {
    return (
        <>
        <div>
        <h1> This is not fine</h1>
        <img src="../public/This-is-fine.jpg" alt="Perrito calmado mientras todo arde a su alrededor" />
        <Link to={"/"}>Volver a la pagina principal</Link>
        </div>
        </>
    )
}
