import React from 'react';
import {Navbar,} from 'react-bootstrap'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import DriverApp from './CustomizeWebsite/DriverApp';
import EmployeeApp from './CustomizeWebsite/EmployeeApp';

const AboutPage = () => {
  
  return (
    <div className="about">
      <Router>
      <Navbar expand="lg" className="customize-nav" id="cost-nav">
                <ul>
                    <li style={{width: "15%"}}><Link to="/customization/employeeapp" className="active">Employee App</Link></li>
                    <li><Link to="/customization/driverapp">Driver App</Link></li>
                    <li><Link to="/customization/tmadmin">T.M./Admin</Link></li>
                    <li><Link to="/customization/advfeatures">Adv/Opt Features</Link></li>
                    <li><Link to="/customization/WhyWekasi">Why Wekasi</Link></li>
                    <li><Link to="/customization/aboutusform">About Us</Link></li>
                </ul>
            </Navbar>
            <h2>Customizations</h2>
            <Switch>
              <Route path="/customization/employeeapp">
                  <EmployeeApp/>
              </Route>
              <Route path="/customization/driverapp">
                  <DriverApp/>
              </Route>
              <Route path="/customization/tmadmin">
                  <DriverApp/>
              </Route><Route path="/customization/advfeatures">
                  <DriverApp/>
              </Route><Route path="/customization/WhyWekasi">
                  <DriverApp/>
              </Route><Route path="/customization/aboutusform">
                  <DriverApp/>
              </Route>
            </Switch>
            </Router>
            
            {/* <Customizations/> */}
    </div>
  )
}

export default AboutPage;