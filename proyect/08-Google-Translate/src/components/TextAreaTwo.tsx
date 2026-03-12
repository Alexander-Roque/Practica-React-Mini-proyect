import { Form } from "react-bootstrap";
import { SectionType } from "../types.d";
import type React from "react";

interface Props {type:SectionType,loading?: undefined, onChange:(value:string)=> void, value:string}

const commonStyle = {border: 0, height: "12.5rem", resize: "none"}

const getPlaceholder = ({type, loading}:{ type: SectionType, loading?: boolean})=>{
    if (type === SectionType.From) return 'Introducir Texto'
    if (loading === true) return "Cargando..."
    return "Traducir"
}

export function TextAreaTwo ({ type,loading, value, onChange}: Props) {
    const styles = type === SectionType.From ? commonStyle : {...commonStyle, background: '#f5f5f5'}

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>)=>{
        onChange(event.target.value)
    }
    console.log(value)

    return (
        <Form.Control
        autoFocus={type === SectionType.From}
        as='textarea'
        placeholder={getPlaceholder({type, loading})}
        style={styles}
        value={value}
        onChange={handleChange}
        />
    )
}
