import * as React from "react"
import "./app.css"

const CAT_ENDPOINT_RANDOM_FACT = `https://catfact.ninja/fact`
// const CAT_ENDPOINT_IMAGE_IMAGE_URL = `https://cataas.com/cat/says/${word}?fontSize=50&fontColor=red&json=true`

export default function App(){
    const [fact, setFact] = React.useState();
    const [image, setImage] = React.useState();
    const [factError, setFactError] = React.useState()

    React.useEffect(()=>{
        async function getRandomFact() {
            try {
                const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
                 if(!res.ok) throw new Error(`Fact fetch failed:${res.status}`)
                const json = await res.json()
                setFact(json.fact)
    
                const fact = json.fact
                const word = fact.split(" ").slice(0,3).join(" ")
                console.log(word)
                
                async function getWords() {
                const res = await fetch(`https://cataas.com/cat/says/${word}?fontSize=50&fontColor=red&json=true`)
                if(!res.ok) throw new Error(`Image fetch failed: ${res.status}`)

                const json = await res.json()
                const url = await json.url
                setImage(url)
            }   
            getWords()
            } catch (error) {
                console.error('Catch en getRandomFact:', err)
                setError(error.message)
            }

        }

        getRandomFact()
    }, [])

    return (
        <main>
        <h1>App de gatitos</h1>
        <section>
        {fact && <p>{fact}</p>}
        {image && <img src={image} alt={`Imagen extraida usando las primeras palabras de ${fact}`} />}
        </section>
        </main>
    )
}
