import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import './App.css'
import * as React from "react"
import { useStore } from './hook/useStore'
import { AUTO_LANGUAGES } from './constants'
import {ArrowIcons} from "./components/icons"



function App() {
  const {fromLanguage,toLanguage, interchangeLanguages} = useStore()

  return (
    <>
    <Container fluid>

    <h1>Google Translate</h1>
    <Row>
      <Col>
      <h2>From</h2>
      {fromLanguage}
      </Col>

      <Col>
      <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGES} onClick={interchangeLanguages}><ArrowIcons /></Button>
      </Col>

      <Col>
      <h2>To</h2>
      {toLanguage}
      </Col>
    </Row>
  
    </Container>
    </>
  )
}

export default App
