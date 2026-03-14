import { useState } from 'react'
import './App.css'
import * as React from "react"
import {type User} from "./type.d"
import { UsersList } from './components/UsersList'

const curl = 'https://randomuser.me/api?results=100'

function App() {
  const [users, setUsers] = React.useState<User[]>([])

  React.useEffect(()=>{
    async function usersApi() {
      try {
        const promise = await fetch(curl)
  
        const data = await promise.json()
        
        const users = setUsers(data.results)

        return users
      } catch (err) {
        console.error(err)
      }
    }
    usersApi()
  },[])
  console.log(users)

  return (
    <>
      <div className='App'>
        <h1>Pruebas tecnicas</h1>
        <UsersList users={users}/>
      </div>
    </>
  )
}

export default App
