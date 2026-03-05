import { Form } from "react-bootstrap";
import { SUPPORT_LANGUAGES } from "../constants";

export function LanguagesSelector({onChange}) {
    <Form.Select aria-label="Selecciona el idioma">
        {Object.entries(SUPPORT_LANGUAGES).map(([key,literal])=>{
            <option key={key} value={key}>
                {literal}
            </option>
        })}

    </Form.Select>
}
