import { Form } from "react-bootstrap";
import { AUTO_LANGUAGES, SUPPORT_LANGUAGES } from "../constants";
import React, { FC } from "react";
import type { FromLanguages, Language, SectionType } from "../types.d";

type Props = | {type: SectionType.From, value: FromLanguages, onChange: (language: FromLanguages) => void} | {type:SectionType.To, value:Language, onChange: (Language: Language) => void}

export function LanguagesSelector({onChange, type, value}: Props) {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as Language)
    }

return(
    <Form.Select aria-label="Selecciona el idioma" onChange={handleChange} value={value}>
        {type === "from" && <option value={AUTO_LANGUAGES}>Detectar Idioma</option>}
        {Object.entries(SUPPORT_LANGUAGES).map(([key, literal])=>(
            <option key={key} value={key}>
                {literal}
            </option>
        ))}
    </Form.Select>
    )
}
