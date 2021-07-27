import React from 'react'
import {Container,Table} from 'react-bootstrap'
import {Link,} from 'react-router-dom'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faBullseye,faUser,faCartPlus,faDollarSign} from '@fortawesome/free-solid-svg-icons'

export default function Subscription() {
    const [setPage] = React.useState(true);
    return (
        <div>
            <h3>Subsciption Packages</h3>
            <hr />
            {/* <Row>
            <Col md={3} sm={6} className="subs_Package">
                <div className="top top-1">
                    <div className="icon"><FontAwesomeIcon icon={faBullseye} size="2x" /></div>
                    <div className="summ"><h4>Rs. 18090/6 Mo</h4>
                    <h6>For 5 Company</h6></div>
                </div>
            </Col>
            <Col md={3} sm={6} className="subs_Package">
                <div className="top top-2">
                <div className="icon"><FontAwesomeIcon icon={faUser} size="2x" /></div>
                <div className="summ"><h4>Rs. 18090/Yr</h4>
                <h6>For 5 Company</h6></div>
                </div>
            </Col>
            <Col md={3} sm={6} className="subs_Package">
                <div className="top top-3">
                <div className="icon"><FontAwesomeIcon icon={faCartPlus} size="2x" /></div>
                <div className="summ"><h4>Rs. 18090/2 Yr</h4>
                <h6>For 5 Company</h6></div>
                </div>
            </Col>
            <Col md={3} sm={6} className="subs_Package">
                <div className="top top-4">
                <div className="icon"><FontAwesomeIcon icon={faDollarSign} size="2x" /></div>
                <div className="summ"><h4>Rs. 18090/4 Yr</h4>
                <h6>For 5 Company</h6></div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={3} sm={6} className="subs_Package">
                <div className="top top-1">
                    <div className="icon"><FontAwesomeIcon icon={faBullseye} size="2x" /></div>
                    <div className="summ"><h4>Rs. 18090/6 Mo</h4>
                    <h6>For 10 Company</h6></div>
                </div>
            </Col>
            <Col md={3} sm={6} className="subs_Package">
                <div className="top top-2">
                <div className="icon"><FontAwesomeIcon icon={faUser} size="2x" /></div>
                <div className="summ"><h4>Rs. 18090/Yr</h4>
                <h6>For 10 Company</h6></div>
                </div>
            </Col>
            <Col md={3} sm={6} className="subs_Package">
                <div className="top top-3">
                <div className="icon"><FontAwesomeIcon icon={faCartPlus} size="2x" /></div>
                <div className="summ"><h4>Rs. 18090/2 Yr</h4>
                <h6>For 10 Company</h6></div>
                </div>
            </Col>
            <Col md={3} sm={6} className="subs_Package">
                <div className="top top-4">
                <div className="icon"><FontAwesomeIcon icon={faDollarSign} size="2x" /></div>
                <div className="summ"><h4>Rs. 18090/4 Yr</h4>
                <h6>For 10 Company</h6></div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col md={3} sm={6} className="subs_Package">
                <div className="top top-1">
                    <div className="icon"><FontAwesomeIcon icon={faBullseye} size="2x" /></div>
                    <div className="summ"><h4>Rs. 18090/6 Mo</h4>
                    <h6>For 15 Company</h6></div>
                </div>
            </Col>
            <Col md={3} sm={6} className="subs_Package">
                <div className="top top-2">
                <div className="icon"><FontAwesomeIcon icon={faUser} size="2x" /></div>
                <div className="summ"><h4>Rs. 18090/Yr</h4>
                <h6>For 15 Company</h6></div>
                </div>
            </Col>
            <Col md={3} sm={6} className="subs_Package">
                <div className="top top-3">
                <div className="icon"><FontAwesomeIcon icon={faCartPlus} size="2x" /></div>
                <div className="summ"><h4>Rs. 18090/2 Yr</h4>
                <h6>For 15 Company</h6></div>
                </div>
            </Col>
            <Col md={3} sm={6} className="subs_Package">
                <div className="top top-4">
                <div className="icon"><FontAwesomeIcon icon={faDollarSign} size="2x" /></div>
                <div className="summ"><h4>Rs. 18090/4 Yr</h4>
                <h6>For 15 Company</h6></div>
                </div>
            </Col>
        </Row> */}
        <Container>
            <h3 align="left">Current Subscription</h3>
            <Table responsive="sm" >
            <thead>
            <tr>
                <th>S.No</th>
                <th>Subs ID</th>
                <th>Package</th>
                <th>Amount</th>
                <th>Activation Date</th>
                <th>Validate Till</th>
                <th>Status</th>
                
            </tr>
            </thead>
            <tbody>
            
            <tr>
                <td>1</td>
                <td><Link to="/transportation/existingCompany/companydetails" onClick={()=>setPage(false)}>101</Link></td>
                <td>level 1</td>
                <td>399</td>
                <td>31/07/2020</td>
                <td>30/12/2020</td>
                <td style={{color:'limegreen'}}>Active</td>
                
            </tr>
            </tbody>
            </Table>
         
            <h3 align="left">History</h3>
            <Table responsive="sm" >
            <thead>
            <tr>
                <th>S.No</th>
                <th>Subs ID</th>
                <th>Package</th>
                <th>Amount</th>
                <th>Activation Date</th>
                <th>Validate Till</th>
                <th>Status</th>
                
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td><Link to="/transportation/existingCompany/companydetails" onClick={()=>setPage(false)}>101</Link></td>
                <td>level 1</td>
                <td>399</td>
                <td>31/07/2020</td>
                <td>30/12/2020</td>
                <td style={{color:'crimson'}}>Expired</td>
                
            </tr><tr>
                <td>2</td>
                <td><Link to="/transportation/existingCompany/companydetails" onClick={()=>setPage(false)}>101</Link></td>
                <td>level 1</td>
                <td>399</td>
                <td>31/07/2020</td>
                <td>30/12/2020</td>
                <td style={{color:'crimson'}}>Expired</td>
                
            </tr><tr>
                <td>3</td>
                <td><Link to="/transportation/existingCompany/companydetails" onClick={()=>setPage(false)}>101</Link></td>
                <td>level 1</td>
                <td>399</td>
                <td>31/07/2020</td>
                <td>30/12/2020</td>
                <td style={{color:'crimson'}}>Expired</td>
                
            </tr><tr>
                <td>4</td>
                <td><Link to="/transportation/existingCompany/companydetails" onClick={()=>setPage(false)}>101</Link></td>
                <td>level 1</td>
                <td>399</td>
                <td>31/07/2020</td>
                <td>30/12/2020</td>
                <td style={{color:'crimson'}}>Expired</td>
                
            </tr><tr>
                <td>5</td>
                <td><Link to="/transportation/existingCompany/companydetails" onClick={()=>setPage(false)}>101</Link></td>
                <td>level 1</td>
                <td>399</td>
                <td>31/07/2020</td>
                <td>30/12/2020</td>
                <td style={{color:'crimson'}}>Expired</td>
                
            </tr>
           
            </tbody>
            </Table>
            
            </Container>
        </div>
    )
}
