
import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

function UploadFileScreen() {
  const [file, setFile] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Row>
        <Col md = {4}>
        <Form>
          <Form.Group controlId="formFile" className="mb-3">
              <Form.Label><h3 className='my-3 py-3'>Upload Data</h3></Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Button className = 'btn  btn-block' type="button" style = {{backgroundColor : 'rgb(53,58,63)'}}>Upload Data <i className="fa-solid fa-upload mx-2"></i></Button>
        </Form>
        </Col>

        <Col md = {8} className = 'py-4'>
          <Card style={{
            display:"flex",
            alignContent: "center",
            justifyContent: "center",
            minHeight: '70vh',
            textAlign: 'center',
          }}
            onDrop={handleDrop} 
            onDragOver={handleDragOver} 
          >
            
              {file ? (
                <p>{file.name}</p>
              ) : (
                <p>Drag and drop a file here</p>
              )}
            <p>OR</p>
            <Row>
              <Col md = {4}></Col>
              <Col md = {4}>
                <Button type="button" style = {{backgroundColor : 'rgb(53,58,63)'}}>Get a Dummy Data <i className="fa-solid fa-download mx-2"></i></Button>
              </Col>
              <Col md = {4}></Col>
            </Row>

            
            
          </Card>
        </Col>

      </Row>
      
    </div>
  )
}

export default UploadFileScreen



