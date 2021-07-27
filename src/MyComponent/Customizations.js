import React from 'react'
import {Form, Row, Col, Container} from 'react-bootstrap'

export default function Customizations() {
    const [emp, setEmp] = React.useState(false);
    const [driver, setDriver] = React.useState(false);
    const [admin, setAdmin] = React.useState(false);
    const [adv, setAdv] = React.useState(false);
    const [why, setWhy] = React.useState(false);
    const [abt, setAbt] = React.useState(false);
    function getData(e){
        let val=e.target.value;
        if(val === "1"){
            setEmp(true);
            setDriver(false);
            setAdmin(false);
            setAdv(false);
            setWhy(false);
            setAbt(false);
        }
        
        else if(val === "2"){
            setEmp(false);
            setDriver(true);
            setAdmin(false);
            setAdv(false);
            setWhy(false);
            setAbt(false);
        }
        else if(val === "3"){
            setEmp(false);
            setDriver(false);
            setAdmin(true);
            setAdv(false);
            setWhy(false);
            setAbt(false);
        }
        else if(val === "4"){
            setEmp(false);
            setDriver(false);
            setAdmin(false);
            setAdv(true);
            setWhy(false);
            setAbt(false);
        }
        else if(val === "5"){
            setEmp(false);
            setDriver(false);
            setAdmin(false);
            setAdv(false);
            setWhy(true);
            setAbt(false);
        }
        else if(val === "6"){
            setEmp(false);
            setDriver(false);
            setAdmin(false);
            setAdv(false);
            setWhy(false);
            setAbt(true);
        }
        else {
            setEmp(false);
            setDriver(false);
            setAdmin(false);
            setAdv(false);
            setWhy(false);
            setAbt(false);
        }
    }
    return (
        <div>
            <Form>
            <Row>
                <Col sm="3">
                    <select className="form-control" aria-label="Default select example" onChange={getData}>
                        <option value="7">Select State Subject To change</option>
                        <option value="1">Employee App</option>
                        <option value="2">Driver App</option>
                        <option value="3">T.M./Admin</option>
                        <option value="4">Adv/Opt Features</option>
                        <option value="5">Why Wekasi</option>
                        <option value="6">About Us</option>
                    </select>
                </Col>
            </Row>
            {
                emp? <EmpForm/> : ""
            }
            {
                driver? <DriverForm/> : ""
            }
            {
                admin? <AdminForm/> : ""
            }
            {
                adv? <AdvForm/> : ""
            }
            {
                why? <WhyForm/> : ""
            }
            {
                abt? <AbtForm/> : ""
            }
                
            </Form>
        </div>
    )
}
function stopSub(e){
    e.preventDefault();
}
function EmpForm(){
    return(
        <>
            <h4>Update Employee Page Details</h4>
            <Container>
            <Row>
                <Col md={6}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Subject
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="text" placeholder="Enter Subject" />
                    </Col>
                </Form.Group>
                </Col>
                <Col md={6}>
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
                </Container>
        </>
    )
}
function DriverForm(){
    return(
        <>
            <h4>Update Driver Page Details</h4>
            <Container>
            <Row>
                <Col md={6}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Subject
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="text" placeholder="Enter Subject" />
                    </Col>
                </Form.Group>
                </Col>
                <Col md={6}>
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
                    <Form.Control type="submit" className="btn-outline-success" value="Update Details" onClick={stopSub}/>
                    </Col>
                </Form.Group>
                </Col>
                
                </Row>
                </Container>
        </>
    )
}
function AdminForm(){
    return(
        <>
            <h4>Update Admin Page Details</h4>
            <Container>
            <Row>
                <Col md={6}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Subject
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="text" placeholder="Enter Subject" />
                    </Col>
                </Form.Group>
                </Col>
                <Col md={6}>
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
                    <Form.Control type="submit" className="btn-outline-success" value="Update Details" onClick={stopSub}/>
                    </Col>
                </Form.Group>
                </Col>
                
                </Row>
                </Container>
        </>
    )
}
function AdvForm(){
    return(
        <>
            <h4>Update Adv/Opt Feature Page Details</h4>
            <Container>
            <Row>
                <Col md={6}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Subject
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="text" placeholder="Enter Subject" />
                    </Col>
                </Form.Group>
                </Col>
                <Col md={6}>
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
                    <Form.Control type="submit" className="btn-outline-success" value="Update Details" onClick={stopSub}/>
                    </Col>
                </Form.Group>
                </Col>
                
                </Row>
                </Container>
        </>
    )
}
function WhyForm(){
    return(
        <>
            <h4>Update Why Wekasi Page Details</h4>
            <Container>
            <Row>
                <Col md={6}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Subject
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="text" placeholder="Enter Subject" />
                    </Col>
                </Form.Group>
                </Col>
                <Col md={6}>
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
                    <Form.Control type="submit" className="btn-outline-success" value="Update Details" onClick={stopSub}/>
                    </Col>
                </Form.Group>
                </Col>
                
                </Row>
                </Container>
        </>
    )
}
function AbtForm(){
    return(
        <>
            <h4>Update About Page Details</h4>
            <Container>
            <Row>
                <Col md={6}>
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label className='add-labels' column sm="12">
                    Subject
                    </Form.Label>
                    <Col sm="12">
                    <Form.Control type="text" placeholder="Enter Subject" />
                    </Col>
                </Form.Group>
                </Col>
                <Col md={6}>
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
                    <Form.Control type="submit" className="btn-outline-success" value="Update Details" onClick={stopSub}/>
                    </Col>
                </Form.Group>
                </Col>
                
                </Row>
                </Container>
        </>
    )
}

