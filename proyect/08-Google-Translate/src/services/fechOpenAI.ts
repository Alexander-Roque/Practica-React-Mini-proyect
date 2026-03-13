// import { GoogleGenAI } from "@google/genai";

// const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY

// const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY})

// async function main() {
//     const response = await ai.models.generateContent({
//         model: 'gemini-2.5-flash',
//         contents: 'Que vamos a traducir hoy?'
//     })
// }

// main()

export async function generiteContent() {
    const curl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent"

    const contents = [
            {
                "role":"user",
                "parts":[
                    {
                        "text":"hello word!"
                    }
                ]
            },
            {
                "role":"model",
                "parts":[
                    {
                        "text":"hola mundo!"
                    }
                ]
            }
        ]

    const method = {
        method: "POST",
        headers: {
            'x-goog-api-key': import.meta.env.VITE_GEMINI_API_KEY,
            'content-Type':'application/json'
        },
        body: JSON.stringify(contents)
    }
    
     const fetchGemeni = await fetch(curl,method
    ).then(response => response.json())
    .then(data=> console.log(data)).catch(error => console.error(error))

    return fetchGemeni
}

