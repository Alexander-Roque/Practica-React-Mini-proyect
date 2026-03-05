import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Form, Button, Stack } from 'react-bootstrap'
import './App.css'
import * as React from "react"
import { useStore } from './hook/useStore'
import { AUTO_LANGUAGES } from './constants'
import {ArrowIcons} from "./components/icons"
import { LanguagesSelector } from './components/LanguagesSelector'
import { SectionType } from './types.d'



function App() {
  const {fromLanguage,toLanguage, interchangeLanguages, setFromLanguage, setToLanguage} = useStore()

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

      <Form.Control 
      as="textarea"
      placeholder='Introducir texto'
      autoFocus
      style={{height: "5rem"}} />
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
      <Form.Control 
      as="textarea"
      placeholder='Traduccion'
      style={{height: "5rem"}} />
      </Stack>
      </Col>
    </Row>
  
    </Container>
    </>
  )
}

export default App
