import XFollowCard from "./XFollowCard.jsx"
import "./app.css"
// import * as React from "react"

const users = [
    {
        userName: "Draconis",
        name:"Draco",
        initialIsFollowing: true
    },
    {
        userName: "Hari",
        name: "Har",
        initialIsFollowing: false
    },
    {
        userName: "Jose",
        name:"Jo",
        initialIsFollowing: true
    },
    {
        userName: "Pikachu",
        name: "Pika",
        initialIsFollowing: false
    }
]
// Cada vez que usamos un array en React debemos siempre utilizar un key. La key debe contener un identificador unico, no debe existir dos key con el mismo valor, normalmente se le da un ID 

function App(){
   
    return (
        <section className="App">
       {/* <XFollowCard userName="Draconis" initialIsFollowing = {true} >
        Draconis
        </XFollowCard>
       <XFollowCard userName="Hari" initialIsFollowing = {false}>
        Haridring
       </XFollowCard>
       <XFollowCard userName="Zapato" initialIsFollowing = {true}>
        Zapato Chamo Lujuan Carrion
        </XFollowCard> */}
        {users.map (users => {
            const {userName, name, initialIsFollowing} = users;
            return (
                <XFollowCard
                key={userName}
                userName={userName}
                initialIsFollowing={initialIsFollowing}
                >
                    {name}
                </XFollowCard>
            )
        })}
    
        </section>
    )
}
export default App
// Un componente es una factoria de elemento es decir una funcion que devuelve un elemento

// Cada vez que se realiza un cambio, se realiza una render para actualizar todo la informacio, tener en cuenta que se propagara hacia abajo si los cambios son de un nivel superior