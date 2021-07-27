import React from 'react'
import {Table,Row,Col,Collapse,Form, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
export default function Querry() {
    const [open, setOpen] = useState(false);
    
    return (
        <div className="query-table">
            <Row style={{padding:"20px"}}>
                <Col md={6}>
                <h3 align="left">General Query </h3> 
                </Col>  
                
                <Col md={6} align="right">
                <button className="btn btn-outline-primary" onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open} >Add New Query</button>
                </Col>    
           </Row>
           <Collapse in={open}>
        <div id="QueryForm">
        <Form>
            <Row>
                <Col md={12}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Subject
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="text" placeholder="Enter Subject" />
                    </Col>
                </Form.Group>
                </Col>
                <Col md={12}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Message
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="text-area" placeholder="Enter Message" />
                    </Col>
                </Form.Group>
                </Col></Row>
                
               
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Col md={4}></Col>
                    <Col md="3" align="center">
                    <Form.Control className="btn-primary" type="submit" value="Add Details" onClick={(e)=>{
                        e.preventDefault();
                    }}/>
                    </Col>
                </Form.Group>
                
                
                </Form>
        </div>
      </Collapse>
      <div id="deletebox">
                    
          <h4>Are You Sure To Delete!</h4>
          <button className="btn" onClick={(e) =>{
                    document.querySelector("#deletebox").classList.remove('click')
                        }}>YES</button>
          <button className="btn" onClick={(e) =>{
                    document.querySelector("#deletebox").classList.remove('click')
                        }}>No</button>
      </div>
      <div id="editbox">
      <Container>
      <Form>
            <Row>
                <Col md={12}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Subject
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="text" placeholder="Enter Subject" />
                    </Col>
                </Form.Group>
                </Col>
                <Col md={12}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Message
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="text-area" placeholder="Enter Message" />
                    </Col>
                </Form.Group>
                </Col></Row>
                
               
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    
                  
                    <Form.Control className="btn-primary" type="submit" value="Update" onClick={(e)=>{
                        e.preventDefault();
                        document.querySelector("#editbox").classList.remove('clickedit');
                    }}/>
                   
                </Form.Group><Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    
                  
                    <Form.Control className="btn-danger" type="button" value="Cancel" onClick={(e)=>{
                        e.preventDefault();
                        document.querySelector("#editbox").classList.remove('clickedit');
                    }}/>
                   
                </Form.Group>
                
                
                </Form></Container>    

      </div>
            <Table responsive="sm">
            <thead>
            <tr>
                <th className="col-xs-1">S.No</th>
                <th className="col-xs-2">Subject</th>
                <th className="col-xs-4">Message</th>
                <th className="col-xs-2">Last Updated</th>
                <th className="col-xs-3">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Agency Name</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>
                <button className="btn btn-warning" onClick={(e) =>{
                    document.querySelector("#editbox").classList.add('clickedit');
                }}><FontAwesomeIcon icon={faEdit}/></button>
                <button className="btn btn-danger trash" onClick={(e) =>{
                    document.querySelector("#deletebox").classList.add('click');
                    
                        }}><FontAwesomeIcon icon={faTrash}/></button>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>Agency Name</td>
                <td>abc@test.com</td>
                <td>12-06-2021</td>
                <td>
                <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit}/></button>
                <button className="btn btn-danger trash"><FontAwesomeIcon icon={faTrash}/></button>
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>Agency Name</td>
                <td>abc@test.com</td>
                <td>12-06-2021</td>
                <td>
                <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit}/></button>
                <button className="btn btn-danger trash"><FontAwesomeIcon icon={faTrash}/></button>
                </td>
            </tr>
            <tr>
                <td>4</td>
                <td>Agency Name</td>
                <td>abc@test.com</td>
                <td>12-06-2021</td>
                <td>
                <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit}/></button>
                <button className="btn btn-danger trash" ><FontAwesomeIcon icon={faTrash}/></button>
                </td>
            </tr>
            <tr>
                <td>5</td>
                <td>Agency Name</td>
                <td>abc@test.com</td>
                <td>12-06-2021</td>
                <td>
                <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit}/></button>
                <button className="btn btn-danger trash"><FontAwesomeIcon icon={faTrash}/></button>
                </td>
            </tr>
            <tr>
                <td>6</td>
                <td>Agency Name</td>
                <td>abc@test.com</td>
                <td>12-06-2021</td>
                <td>
                <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit}/></button>
                <button className="btn btn-danger trash" ><FontAwesomeIcon icon={faTrash}/></button>
                </td>
            </tr>
            <tr>
                <td>7</td>
                <td>Agency Name</td>
                <td>abc@test.com</td>
                <td>12-06-2021</td>
                <td>
                <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit}/></button>
                <button className="btn btn-danger trash" ><FontAwesomeIcon icon={faTrash}/></button>
                </td>
            </tr>
            <tr>
                <td>8</td>
                <td>Agency Name</td>
                <td>abc@test.com</td>
                <td>12-06-2021</td>
                <td>
                <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit}/></button>
                <button className="btn btn-danger trash"><FontAwesomeIcon icon={faTrash}/></button>
                </td>
            </tr>
            <tr>
                <td>9</td>
                <td>Agency Name</td>
                <td>abc@test.com</td>
                <td>12-06-2021</td>
                <td>
                <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit}/></button>
                <button className="btn btn-danger trash" ><FontAwesomeIcon icon={faTrash}/></button>
                </td>
            </tr>
            <tr>
                <td>10</td>
                <td>Agency Name</td>
                <td>abc@test.com</td>
                <td>12-06-2021</td>
                <td>
                <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit}/></button>
                <button className="btn btn-danger trash"><FontAwesomeIcon icon={faTrash}/></button>
                </td>
            </tr>
            </tbody>
            </Table>
        </div>
    )
}
