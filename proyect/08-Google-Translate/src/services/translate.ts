import OpenAIApi from "openai"
import Configuration from "openai"
import { SUPPORT_LANGUAGES } from "../constants";
import type { FromLanguages, Language } from "../types.d";

// RECORDATORIO, ESTO SE TIENE QUE REALIZAR EN EL BACKEND NO EN EL FRONTED PORQUE SINO TU API.KEY PUEDE SER VULNERADA

const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

const configuration = new Configuration({apiKey})

const openai = new OpenAIApi(configuration)

export async function translate({
    fromLanguage,
    toLanguage,
    text
}: {
    fromLanguage: FromLanguages,
    toLanguage: Language,
    text: string
}) {
    if (fromLanguage === toLanguage) return text
    const message = [
        {
            role: "system",
            content: "You are a AI that translates text. You receive a text from the user. Do not answer, just translate the text. The original language is surrounded by `{{`and`}}`. You can also recive {{auto}} which means that you have to detect the language. The language you translate to is surrounded by `[[`and`]]`."
        },
        {
            role: "user",
            content: `Hola mundo {{Español}} [[English]]`
        },
        {
            role: "assistant",
            content: "Hello world"
        },
        {
            role: "user",
            content: "How are you? {{auto}} [[Deutsch]]"
        },
        {
            role: "assistant",
            content: "Wie geht es dir?"
        },
        {
            role: "user",
            content: "Bon dia, com estas? {{auto}} [[Español]]"
        }
    ]

    const fromCode = fromLanguage === "auto" ? "auto" : SUPPORT_LANGUAGES[fromLanguage]
    const toCode = SUPPORT_LANGUAGES[toLanguage]

    const completion = await openai.createChatCompletion({
        model: "gtp-3.5-turbo",
        message: [
            ...message,
            {
                role: "user",
                content: `${text} {{${fromCode}} [[${toCode}]]`
            }
        ]
    })

    return completion.data.choices[0]?.message?.content
}
