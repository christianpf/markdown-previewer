import { useState } from 'react';
import ReactMarkdown from 'react-markdown'

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import CardHeader from 'react-bootstrap/esm/CardHeader';


const Editor = (props) => {

  return (
    <Card className="editor_card">
      <Card.Header className="header">Editor</Card.Header>
      <Card.Body className="editor_body">
        <textarea id="editor" rows="10" onChange={() => props.getEditor(document.getElementById("editor").value)}></textarea>
      </Card.Body>
    </Card>
  )
}

const Preview = (props) => {

  return ( 
    <Card className="preview_card">
      <CardHeader className="header">Preview</CardHeader>
      <Card.Body id="preview">
        <ReactMarkdown>{props.text}</ReactMarkdown>
      </Card.Body>
    </Card>
  )
}


function App() {
  const [markText, setMarkText] = useState("");

  const getEditorText = (editorData) => {
    setMarkText(editorData);
  }

  return (
    <div className="App">
        <Container className='container mt-5 gap-4'>
          <Row className='justify-content-center'>
            <Col className="col-xs-12 col-sm-6">
              <Editor getEditor={getEditorText}/>
            </Col>
          </Row>
          <Row className='justify-content-center mt-5'>
            <Col className="col-xs-12 col-sm-10">
              <Preview text={markText}/>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
