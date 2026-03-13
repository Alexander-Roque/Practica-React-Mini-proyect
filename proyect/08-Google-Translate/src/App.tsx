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
import { translate } from './services/translate'



function App() {
  const {fromLanguage,toLanguage, interchangeLanguages, setFromLanguage, setToLanguage, setFromText, setResult, fromText, result, loading} = useStore()

  React.useEffect(()=>{
    if(fromText === "") return

    translate({fromLanguage, toLanguage, text:fromText})
    .then(()=>{
      if (result == null) return
      setResult(result)
    }). catch(()=> setResult("Error"))

  }, [fromText])

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

      <TextArea
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

      <TextArea
        loading={loading}
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
