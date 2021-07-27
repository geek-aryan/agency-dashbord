import React from 'react'
import {Form, Row, Col, Container} from 'react-bootstrap'
export default function DriverApp() {
    return (
        <div>
            
            <Container>
            <hr />
             <h4 style={{textAlign:"left"}}>Update Driver App Page Details</h4>
             <br />
             <Form>
            <Row>
                <Col md={4}>
                <Form.Label className='add-labels' column sm="12">
                    Select Category
                    </Form.Label>
                    <select className="form-control" aria-label="Default select example">
                        <option value="7">Select Subject To change</option>
                        <option value="1">Native Apps</option>
                        <option value="2">Routs and Timings</option>
                        <option value="3">Trip Check-in</option>
                        <option value="4">Vehical Tracking</option>
                        <option value="5">Trip Details</option>
                        <option value="6">Notification and Alerts</option>
                        <option value="6">Emergency Button</option>
                        <option value="6">Trip FeedBack</option>
                    </select>
                </Col>
            
                <Col md={4}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Subject
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="text" placeholder="Enter Subject" />
                    </Col>
                </Form.Group>
                </Col>
                <Col md={4}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12" >
                    Select Image
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="file" style={{float: "left"}}/>
                    </Col>
                </Form.Group>
                </Col>
            </Row>
                <Col md={12}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Caption
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="text-area" placeholder="Enter Message" />
                    </Col>
                </Form.Group>
                </Col>
                <Row>
                <Col md={12}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Col sm="5"></Col>
                    <Col sm="2">
                    <Form.Control type="submit" className="btn-outline-success" value="Update Details" onClick={()=>{stopSub()}}/>
                    </Col>
                </Form.Group>
                </Col>
                
                </Row>
                
            </Form>
            </Container>
        </div>
    )
}
function stopSub(e){
    e.preventDefault();
}