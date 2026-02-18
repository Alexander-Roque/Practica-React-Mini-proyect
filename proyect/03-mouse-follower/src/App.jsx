import './App.css'
import * as React from "react"

function App() {
  const [enabled, setEnabled] = React.useState(false)
  const [position, setPosition] = React.useState({x: 0, y:0})

  React.useEffect(()=>{
    console.log("efecto", enabled)

    const handleMove = (event) => {
      const {clientX, clientY} = event;
      setPosition({x: clientX, y:clientY})
      console.log("handleMove", {clientX, clientY})
    }
    if(enabled){
      window.addEventListener("pointermove", handleMove)
    }

    return () => {
      window.removeEventListener("pointermove", handleMove)
    }
  },[enabled])


  return(
    <main>
    <div style={
      { position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`}
    }/>
    <button onClick={()=>setEnabled(!enabled)}>{enabled ? "Desactivado" : "Activado"}</button>
    </main>
  )
}

export default App
