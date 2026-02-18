import * as React from "react";
// import "./app.css"

function XFollowCard({ userName, children, initialIsFollowing}){
// nota nunca trates de modificar o mutar una prop, estos son inmutables
    const [isFollowing, setIsFollowing] = React.useState(initialIsFollowing)
const text = isFollowing ? "Siguiendo" : "Seguir"
const buttonClassName = isFollowing ? "x-followCard-button is-following" : "x-followCard-button"

// console.log("El nombre de la carta es:", userName)

const handlerClick = () => {
    setIsFollowing(!isFollowing)
}

    return(
        <article className="x-followCard">
               <header className="x-followCard-header">
                   <img src="/../public/doro.png" alt="criatura blanca caotica con cara de dorothy" width="500px" className="x-followCard-avatar"/>
                   <div className="x-followCard-info">
                       <strong>{children}</strong>
                       <span className="x-followCard-infoUserName">@{userName}</span>
                   </div>
               </header>
               <aside>
                   <button className={buttonClassName} onClick={()=>{handlerClick()}}>
                     <span className="x-followCard-text">{text}</span> 
                       <span className="x-followCard-stopFollow">Dejar de seguir</span>
                   </button>
               </aside>
           </article>
       )
}
export default XFollowCard

// los children son los elements que almacenan otros elementos, ejemplo button y el texto Seguir es el children de aside

// Dato de color, cuando el padre subre de alguna actualizacion de estado este afectara a sus hijos, por ejemplo app tiene dos hijos y solo uno hereda un cambio, aun asi React actualiza todos los hijos sin importar que algunas no sufran los cambios igualmente volvera a renderizar