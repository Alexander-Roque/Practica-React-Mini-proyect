import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Form, Button, Stack } from 'react-bootstrap'
import './App.css'
import * as React from "react"
import { useStore } from './hook/useStore'
import { AUTO_LANGUAGES } from './constants'
import {ArrowIcons} from "./components/icons"
import { LanguagesSelector } from './components/LanguagesSelector'
import { SectionType } from './types.d'
import { TextArea } from './components/TextArea'
import { TextAreaTwo } from './components/TextAreaTwo'



function App() {
  const {fromLanguage,toLanguage, interchangeLanguages, setFromLanguage, setToLanguage, setFromText, setResult, fromText, result} = useStore()

    console.log(result)
    console.log(fromText)

  return (
    <>
    <Container fluid>

    <h1>Google Translate</h1>
    <Row>
      <Col>
      <Stack gap={2}>
      <LanguagesSelector 
      type= {SectionType.From}
      value={fromLanguage}
      onChange={setFromLanguage} />

      <TextAreaTwo
      type={SectionType.From}
      value={fromText}
      onChange={setFromText}
      />
      </Stack>
      </Col>

      <Col xs="auto">
      <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGES} onClick={interchangeLanguages}><ArrowIcons /></Button>
      </Col>

      <Col>
      <Stack gap={2}>
      <LanguagesSelector 
      type= {SectionType.To}
      value={toLanguage}
      onChange={setToLanguage}/>

      <TextAreaTwo
        type={SectionType.To}
        value={result}
        onChange={setResult}
      />
      </Stack>
      </Col>
    </Row>
  
    </Container>
    </>
  )
}

export default App
