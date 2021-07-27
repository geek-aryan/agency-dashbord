import React from 'react'
import { Navbar, NavDropdown, Row,Collapse } from 'react-bootstrap'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import './Style.css'
import ExistingAgency from './ExistingAgency'
import AddAgency from './AddAgency'
import Querry from './Querry'
import Driver from './Driver'
import Transportation from './Transportation'
import AboutPage from "./About";
import HomePage from "./Home";
import Home2 from "./home2";
import Home3 from "./home3";
import Home4 from "./home4";
import Link2 from "./link2"
import Link3 from "./link3"
import Link4 from "./link4"
import { useState } from 'react'

export default function NavSidebarf() {
  const [open, setOpen] = useState(false);
  return (
    <Row>
    <div className="container-fluid">
    <Router>
    <div id="dashmenu" className="">
    
      <Navbar className="sidebar">
        <ul style={{margin:"0px",padding: "0px"}}>
          <li ><Link to="/" className="nav-link active">Dashboard</Link></li>
          {/* <li className="nav-item"><Link to="/home2" className="nav-link drop-link" style={{padding: "0px"}}>
            <NavDropdown title="Travel Agency" id="sidedrop1" >
            <ul style={{margin:"0px", padding:"0px"}}>
              <li><NavDropdown.Item className=""><Link to="/existing-agency" className="nav-link">Existing Agency</Link></NavDropdown.Item></li>
              <li><NavDropdown.Item className=""><Link to="/add-agency" className="nav-link">Add New Agency</Link></NavDropdown.Item></li>
              <li><NavDropdown.Item className=""><Link to="/general-querry" className="nav-link">General Querry</Link></NavDropdown.Item></li>
              </ul>
            </NavDropdown>
          </Link></li> */}
          <li className="nav-item"><Link  className="nav-link" onClick={() => setOpen(!open)}
          aria-controls="collapse-agency"
          aria-expanded={open}>Company
          </Link></li>
          <Collapse in={open}>
          <div id="collapse-agency">
            <li><NavDropdown.Item><Link to="/existing-agency" className="nav-link">Ride Detail</Link></NavDropdown.Item></li>
            <li><NavDropdown.Item><Link to="/add-agency" className="nav-link">Manage Driver</Link></NavDropdown.Item></li>
            <li><NavDropdown.Item><Link to="/general-querry" className="nav-link">Company Request</Link></NavDropdown.Item></li>
          </div>
          </Collapse>
          <li className="nav-item"><Link to="/transportation/existing-company" className="nav-link">Ride Detail</Link></li>
          <li className="nav-item"><Link to="/driver" className="nav-link" >Manage Driver</Link></li>
          {/* <li className="nav-item"><Link to="/customization/employeeapp" className="nav-link">Customize Website</Link></li> */}
          <li className="nav-item"><Link to="/link2" className="nav-link">Company Request</Link></li>
          <li className="nav-item"><Link to="/link3" className="nav-link">Subscription Detail</Link></li>
          <li className="nav-item"><Link to="/general-querry" className="nav-link">Contact to Agency</Link></li><li className="nav-item"><Link to="/link1" className="nav-link">Link1</Link></li>
          <li className="nav-item"><Link to="/link2" className="nav-link">Link2</Link></li>
          <li className="nav-item"><Link to="/link3" className="nav-link">Link3</Link></li>
          <li className="nav-item"><Link to="/link4" className="nav-link">Link4</Link></li><li className="nav-item"><Link to="/link1" className="nav-link">Link1</Link></li>
          <li className="nav-item"><Link to="/link2" className="nav-link">Link2</Link></li>
          <li className="nav-item"><Link to="/link3" className="nav-link">Link3</Link></li>
          <li className="nav-item"><Link to="/link4" className="nav-link">Link4</Link></li><li className="nav-item"><Link to="/link1" className="nav-link">Link1</Link></li>
          <li className="nav-item"><Link to="/link2" className="nav-link">Link2</Link></li>
          <li className="nav-item"><Link to="/link3" className="nav-link">Link3</Link></li>
          <li className="nav-item"><Link to="/link4" className="nav-link">Link4</Link></li>
          <li className="nav-item">
          {/* Dropdown-menu */}
          <NavDropdown title="Dropdown" id="sidedrop1" >
          <ul style={{margin:"0px", padding:"0px"}}>
            <li><NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item></li>
            <li><NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item></li>
            <li><NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item></li>
            </ul>
          </NavDropdown> 
          </li>
        </ul>
      </Navbar>
    </div>
    <div className="outsideOfMenu">
      <Switch>
          <Route path="/existing-agency">
            <ExistingAgency />
          </Route>
          <Route path="/add-agency">
            <AddAgency />
          </Route>
          <Route path="/general-querry">
            <Querry />
          </Route>
          <Route path="/driver">
            <Driver />
          </Route>
          <Route path="/transportation/existing-company">
            <Transportation />
          </Route>
          <Route path="/customization/employeeapp">
            <AboutPage />
          </Route>
          <Route path="/link2">
            <Link2 />
          </Route>
          <Route path="/link3">
            <Link3 />
          </Route>
          <Route path="/link4">
            <Link4 />
          </Route>
          <Route path="/" exact={true}>
            <HomePage />
          </Route>
          <Route path="/home2">
            <Home2 />
          </Route>
          <Route path="/home3">
            <Home3 />
          </Route>
          <Route path="/home4">
            <Home4 />
          </Route>
          
        </Switch>
    </div>
    </Router>
    </div>
    </Row>
  )
}
