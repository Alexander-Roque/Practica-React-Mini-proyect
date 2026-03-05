import { Form } from "react-bootstrap";
import type { SectionType } from "../types";

interface Props {autoFocus:boolean,placeholder: string,loading?: undefined, onChange:(value:string)=> void, value:string}

export function TextArea ({placeholder, autoFocus,loading, type, value, onChange}: Props) {
    return (
        <Form.Control
        autoFocus={autoFocus}
        as='textarea'
        placeholder={placeholder}
        style={{height: "5rem"}} 
        />
    )
}
