import { Form } from "react-bootstrap";
import { SectionType } from "../types.d";

interface Props {autoFocus:boolean,placeholder: string,loading?: undefined, onChange:(value:string)=> void, value:string}

// const commonStyle = {height: "12.5rem"}

export function TextArea ({placeholder, autoFocus,loading, type, value, onChange}: Props) {
    return (
        <Form.Control
        autoFocus={type === SectionType.From}
        as='textarea'
        placeholder={placeholder}
        style={{height: "5rem"}} 
        />
    )
}
