import React from 'react'
import {Table, Container} from 'react-bootstrap'
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CompanyDetails from './CompanyDetails'

export default function ExistingCompany() {
    const [page, setPage] = React.useState(true);
    return (
        <div>
        <Router>
        
            {page? <React.Fragment>
            <h3 align="left">Existing Companies</h3> 
            <br />
            <Container>
            
            <Table responsive="sm" >
            <thead>
            <tr>
                <th>S.No</th>
                <th>Company ID</th>
                <th>Company Name</th>
                <th>Email</th>
                <th>Contact No.</th>
                <th>City</th>
                <th>State</th>
                <th>Joined Date</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td><Link to="/transportation/existingCompany/companydetails" onClick={()=>setPage(false)}>101</Link></td>
                <td>Agency Name</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>Bengluru</td>
                <td>Karnatka</td>
                <td>12-06-2021</td>
            </tr>
            <tr>
                <td>2</td>
                <td><Link to="/transportation/existingCompany/companydetails" onClick={()=>setPage(false)}>101</Link></td>
                <td>Agency Name</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>Bengluru</td>
                <td>Karnatka</td>
                <td>12-06-2021</td>
            </tr>
            <tr>
                <td>3</td>
                <td><Link to="/transportation/existingCompany/companydetails" onClick={()=>setPage(false)}>101</Link></td>
                <td>Agency Name</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>Bengluru</td>
                <td>Karnatka</td>
                <td>12-06-2021</td>
            </tr>
            <tr>
                <td>4</td>
                <td><Link to="/transportation/existingCompany/companydetails" onClick={()=>setPage(false)}>101</Link></td>
                <td>Agency Name</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>Bengluru</td>
                <td>Karnatka</td>
                <td>12-06-2021</td>
            </tr>
            <tr>
                <td>5</td>
                <td><Link to="/transportation/existingCompany/companydetails" onClick={()=>setPage(false)}>101</Link></td>
                <td>Agency Name</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>Bengluru</td>
                <td>Karnatka</td>
                <td>12-06-2021</td>
            </tr>
            <tr>
                <td>6</td>
                <td><Link to="/transportation/existingCompany/companydetails" onClick={()=>setPage(false)}>101</Link></td>
                <td>Agency Name</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>Bengluru</td>
                <td>Karnatka</td>
                <td>12-06-2021</td>
            </tr>
            <tr>
                <td>7</td>
                <td><Link to="/transportation/existingCompany/companydetails" onClick={()=>setPage(false)}>101</Link></td>
                <td>Agency Name</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>Bengluru</td>
                <td>Karnatka</td>
                <td>12-06-2021</td>
            </tr>
            <tr>
                <td>8</td>
                <td><Link to="/transportation/existingCompany/companydetails" onClick={()=>setPage(false)}>101</Link></td>
                <td>Agency Name</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>Bengluru</td>
                <td>Karnatka</td>
                <td>12-06-2021</td>
            </tr>
            <tr>
                <td>9</td>
                <td><Link to="/transportation/existingCompany/companydetails" onClick={()=>setPage(false)}>101</Link></td>
                <td>Agency Name</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>Bengluru</td>
                <td>Karnatka</td>
                <td>12-06-2021</td>
            </tr>
            <tr>
                <td>10</td>
                <td><Link to="/transportation/existingCompany/companydetails" onClick={()=>setPage(false)}>101</Link></td>
                <td>Agency Name</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>Bengluru</td>
                <td>Karnatka</td>
                <td>12-06-2021</td>
            </tr>
            </tbody>
            </Table>
            
            </Container>
            </React.Fragment>
            : <React.Fragment>
            <Switch>
            <Route path="/transportation/existingCompany/companydetails">
                <CompanyDetails/>
            </Route>
        </Switch>
            </React.Fragment>
            }
            </Router>
        </div>
    )
}
