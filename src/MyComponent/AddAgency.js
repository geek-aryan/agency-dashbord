import React from 'react'
import {Form, Row, Col,Container} from 'react-bootstrap'

export default function AddAgency() {
    return (
        <div>
            <h3>Add New Agency</h3> 
          
            <Container className="addcont">
                
            <Form>
                <Row>
                <Col md={6}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Agency Name
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="text" placeholder="Enter Agency Name" />
                    </Col>
                </Form.Group>
                </Col><Col md={6}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Agency Email
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="email" placeholder="Enter Email" />
                    </Col>
                </Form.Group>
                </Col></Row>
                <Row>
                <Col md={6}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Agency Contact No.
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="tel" placeholder="Enter Agency Contact No." />
                    </Col>
                </Form.Group>
                </Col><Col md={6}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Alternate Contact No.
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="text" placeholder="Enter Alternate Contact No." />
                    </Col>
                </Form.Group>
                </Col>
                </Row>
                <Row>
                <Col md={6}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Address 1
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="text" placeholder="Enter Address 1" />
                    </Col>
                </Form.Group>
                </Col><Col md={6}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    City
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="text" placeholder="Enter City" />
                    </Col>
                </Form.Group>
                </Col>
                </Row>
                
                <Row>
                    <Col md={6}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    State
                    </Form.Label>
                    <Col sm="12">
                    <select className="form-control" aria-label="Default select example">
                        <option>Select State</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    </Col>
                </Form.Group>
                    </Col>
            
                    <Col md={6}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Pin code
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="text" placeholder="Enter Pin code" />
                    </Col>
                </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Address 2
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="text" placeholder="Enter Address 2" />
                    </Col>
                </Form.Group>
                    </Col>
                    <Col md={6}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    City
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="text" placeholder="Enter City" />
                    </Col>
                </Form.Group>
                    </Col>
                </Row>
                 <Row>
                    <Col md={6}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    State
                    </Form.Label>
                    <Col sm="12">
                    <select className="form-control" aria-label="Default select example">
                        <option>Select State</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    </Col>
                </Form.Group>
                    </Col>
                    <Col md={6}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Pin Code
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="text" placeholder="Enter Pin Code" />
                    </Col>
                </Form.Group>
                    </Col>
                </Row>
                 
                
          
                
               
                
                <br></br>
                <hr></hr>
                <h2>Enter Honer Details</h2>
                <Row>
                <Col md={6}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Name
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="text" placeholder="Enter Honer Name" />
                    </Col>
                </Form.Group>
                </Col>
                <Col md={6}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Email
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="text" placeholder="Enter Email" />
                    </Col>
                </Form.Group>
                </Col></Row>
                <Row>
                <Col md={6}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Mobile No.
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="tel" placeholder="Enter Mobile No." />
                    </Col>
                </Form.Group>
                </Col>
                <Col md={6}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">Alt
                    Mobile No.
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="tel" placeholder="Enter Mobile No." />
                    </Col>
                </Form.Group>
                
                </Col></Row>
                
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Col sm="12">
                    <Form.Control className="btn-outline-primary" type="submit" value="Add Details" onClick={(e)=>{
                        e.preventDefault();
                    }} />
                    </Col>
                </Form.Group>
                
                
                </Form>
                </Container>
        </div>
    )
}
