import React from 'react'
import {Table,Row,Col,Collapse,Form,  } from 'react-bootstrap'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
export default function Driver() {
    const [open, setOpen] = useState(false);
    // const [openedit, setEditOpen] = useState(false);
    const [vehicle, setVehicle] = useState(false);
    function getData(e){
        let val=e.target.value;
        if(val === "2")
            setVehicle(true);
        else
            setVehicle(false);
    }
    return (
        <div className="query-table">
            <Row style={{padding:"20px"}}>
                <Col md={6}>
                <h3 align="left">Existing Drivers </h3> 
                </Col>  
                
                <Col md={6} align="right">
                <button className="btn btn-outline-primary" onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open} >Add New Driver</button>
                </Col>    
           </Row>
           <Collapse in={open}>
        <div id="QueryForm">
        <Form>
            <Row>
                <Col md={12}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Name
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="text" placeholder="Enter Name" />
                    </Col>
                </Form.Group>
                </Col>
                <Row>
                    <Col md={6}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Email
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="email" placeholder="Enter Email" />
                    </Col>
                </Form.Group>
                    </Col>
                    <Col md={6}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Mobile No
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="tel" placeholder="Enter Mobile No" />
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
                <Row>
                    <Col md={6}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Aadhar No
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="text" placeholder="Enter Aadhar No" />
                    </Col>
                </Form.Group>
                    </Col>
                    <Col md={6}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Upload Aadhar Card
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="file"  />
                    </Col>
                </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Driving Licance No
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="text" placeholder="Enter Driving Licance No" />
                    </Col>
                </Form.Group>
                    </Col>
                    <Col md={6}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Upload Driving Licance
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="file"  />
                    </Col>
                </Form.Group>
                    </Col>
                </Row>
                </Row>
                <Row>
                    <Col md={6}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Category
                    </Form.Label>
                    <Col sm="12">
                    <select className="form-control" aria-label="Default select example">
                        <option>Select Category</option>
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
                    Vehicle Option
                    </Form.Label>
                    <Col sm="12">
                    <select className="form-control" aria-label="Default select example" onChange={getData}>
                        <option value="1">Select Vehicle</option>
                        <option value="2" >With Vehicle</option>
                        <option value="3" >Without Vehicle</option>
                    </select>
                    </Col>
                </Form.Group>
                    </Col>
                </Row>
                {vehicle? vehicleForm() : ""}
                
               
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
            <Table responsive="sm">
            <thead>
            <tr>
                <th className="col-xs-1">S.No</th>
                <th className="col-xs-2">Driver Id</th>
                <th className="col-xs-4">Email</th>
                <th className="col-xs-2">Mobile No</th>
                <th className="col-xs-3">Vehicle</th>
                {/* <th className="col-xs-3">Status</th> */}
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>110025415</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>Yes</td>
                {/* <td>
                <button className="btn btn-warning"  onClick={() => setEditOpen(!openedit)}
                        aria-controls="editformm"
                        aria-expanded={openedit}>
                    <FontAwesomeIcon icon={faEdit}/></button>
                <button className="btn btn-danger trash" onClick={(e) =>{
                    document.querySelector("#deletebox").classList.add('click');
                    
                        }}><FontAwesomeIcon icon={faTrash}/></button>
                </td> */}
            </tr>
            {/* <Collapse in={openedit}>
            <tr><td colspan='6'>
            
            <div id="editform">
                <Container>          
                      <Form>
            <Row>
                <Col md={12}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Name
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="text" placeholder="Enter Name" />
                    </Col>
                </Form.Group>
                </Col>
                <Row>
                    <Col md={6}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Email
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="email" placeholder="Enter Email" />
                    </Col>
                </Form.Group>
                    </Col>
                    <Col md={6}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Mobile No
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="tel" placeholder="Enter Mobile No" />
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
                <Row>
                    <Col md={6}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Aadhar No
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="text" placeholder="Enter Aadhar No" />
                    </Col>
                </Form.Group>
                    </Col>
                    <Col md={6}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Upload Aadhar Card
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="file"  />
                    </Col>
                </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Driving Licance No
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="text" placeholder="Enter Driving Licance No" />
                    </Col>
                </Form.Group>
                    </Col>
                    <Col md={6}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Upload Driving Licance
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="file"  />
                    </Col>
                </Form.Group>
                    </Col>
                </Row>
                </Row>
                <Row>
                    <Col md={6}>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Category
                    </Form.Label>
                    <Col sm="12">
                    <select className="form-control" aria-label="Default select example">
                        <option>Select Category</option>
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
                    Vehicle Option
                    </Form.Label>
                    <Col sm="12">
                    <select className="form-control" aria-label="Default select example" onChange={getData}>
                        <option value="1">Select Vehicle</option>
                        <option value="2" >With Vehicle</option>
                        <option value="3" >Without Vehicle</option>
                    </select>
                    </Col>
                </Form.Group>
                    </Col>
                </Row>
                {vehicle? vehicleForm() : ""}
                
               
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Col md={4}></Col>
                    <Col md="3" align="center">
                    <Form.Control className="btn-primary" type="submit" value="Update Details" onClick={(e)=>{setEditOpen(!openedit)
                        e.preventDefault();
                    }}aria-controls="editformm"
                    aria-expanded={openedit}
                    />
                    </Col>
                </Form.Group>
                
                
                </Form></Container>


            </div>
            
                </td></tr>
                </Collapse> */}
            {/* end of editform  */}
            <tr>
                <td>2</td>
                <td>110025415</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>No</td>
                {/* <td>
                <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit}/></button>
                <button className="btn btn-danger trash"><FontAwesomeIcon icon={faTrash}/></button>
                </td> */}
            </tr>
            <tr>
                <td>3</td>
                <td>110025415</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>No</td>
                {/* <td>
                <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit}/></button>
                <button className="btn btn-danger trash"><FontAwesomeIcon icon={faTrash}/></button>
                </td> */}
            </tr>
            <tr>
                <td>4</td>
                <td>110025415</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>Yes</td>
                {/* <td>
                <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit}/></button>
                <button className="btn btn-danger trash" ><FontAwesomeIcon icon={faTrash}/></button>
                </td> */}
            </tr>
            <tr>
                <td>5</td>
                <td>110025415</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>Yes</td>
                {/* <td>
                <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit}/></button>
                <button className="btn btn-danger trash"><FontAwesomeIcon icon={faTrash}/></button>
                </td> */}
            </tr>
            <tr>
                <td>6</td>
                <td>110025415</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>No</td>
                {/* <td>
                <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit}/></button>
                <button className="btn btn-danger trash" ><FontAwesomeIcon icon={faTrash}/></button>
                </td> */}
            </tr>
            <tr>
                <td>7</td>
                <td>110025415</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>Yes</td>
                {/* <td>
                <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit}/></button>
                <button className="btn btn-danger trash" ><FontAwesomeIcon icon={faTrash}/></button>
                </td> */}
            </tr>
            <tr>
                <td>8</td>
                <td>110025415</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>Yes</td>
                {/* <td>
                <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit}/></button>
                <button className="btn btn-danger trash"><FontAwesomeIcon icon={faTrash}/></button>
                </td> */}
            </tr>
            <tr>
                <td>9</td>
                <td>110025415</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>Yes</td>
                {/* <td>
                <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit}/></button>
                <button className="btn btn-danger trash"><FontAwesomeIcon icon={faTrash}/></button>
                </td> */}
            </tr>
            <tr>
                <td>10</td>
                <td>110025415</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>No</td>
                {/* <td>
                <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit}/></button>
                <button className="btn btn-danger trash"><FontAwesomeIcon icon={faTrash}/></button>
                </td> */}
            </tr>
            </tbody>
            </Table>
        </div>
    )
}
function vehicleForm(){
    return(
        <React.Fragment>
        <Row>
            <Col md={6}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label className='add-labels' column sm="12">
                Vehicle Name
                </Form.Label>
                <Col sm="12">
                <Form.Control type="text" placeholder="Enter Vehicle Name" />
                </Col>
            </Form.Group>
            </Col><Col md={6}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label className='add-labels' column sm="12">
                Vehicle No
                </Form.Label>
                <Col sm="12">
                <Form.Control type="text" placeholder="Vehicle No" />
                </Col>
            </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col md={6}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label className='add-labels' column sm="12">
                RC No
                </Form.Label>
                <Col sm="12">
                <Form.Control type="text" placeholder="Enter RC No" />
                </Col>
            </Form.Group>
            </Col><Col md={6}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label className='add-labels' column sm="12">
                Upload RC
                </Form.Label>
                <Col sm="12">
                <Form.Control type="file" />
                </Col>
            </Form.Group>
            </Col>
        </Row>
        <Row>
            <Col md={12}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label className='add-labels' column sm="12">
                Additional Info
                </Form.Label>
                <Col sm="12">
                <Form.Control type="text" placeholder="Enter Additional Info" />
                </Col>
            </Form.Group>
            </Col>
        </Row>

        </React.Fragment>
    )
}

