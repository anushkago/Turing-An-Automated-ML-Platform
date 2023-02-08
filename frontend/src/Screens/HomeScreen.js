import React from 'react'
import { Button, Col, Image, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import UploadFile from './UploadFileScreen'

function HomeScreen() {
  return (
    <div>
        <Row className='my-5 py-5'>
            <Col md = {6}>
                <Row>
                    <h1 className='my-3'>Turing</h1>
                    <h3 className='my-3'>An Automated Machine Learning Platform</h3>
                    <p>We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests. ChatGPT is a sibling model to InstructGPT, which is trained to follow an instruction in a prompt and provide a detailed response.</p>
                </Row>
                <Row className='my-3'>
                    <Col md = {4}>
                        <LinkContainer to='/upload'>
                            <Button className = 'btn  btn-block' type="button" style = {{backgroundColor : 'rgb(53,58,63)'}}>Try Turing <i className="fa-solid fa-upload mx-2"></i></Button>
                        </LinkContainer>
                        
                    </Col>
                </Row>
            </Col>
            <Col md = {6}><Image src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' fluid /></Col>
        </Row>
    </div>
  )
}

export default HomeScreen
