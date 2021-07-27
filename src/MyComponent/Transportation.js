import React from 'react'
import {Navbar,} from 'react-bootstrap'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Sonnet from './Sonnet'
import Driver from './Driver'
import ExistingCompany from './ExistingCompany'
import Subscription from './Subscription'
import Querry from './Querry'
import RideHistory from './RideHistory'

export default function Transportation() {
    return (
        <div>
        <Router>
            <Navbar expand="lg" className="transportation-nav" id="trans-nav">
                
                <ul>
                    <li style={{width: "15%"}}><Link to="/transportation/existing-company" className="active">Existing-Company</Link></li>
                    <li><Link to="/transportation/drivers">Drivers</Link></li>
                    <li><Link to="/transportation/rides">Ride History</Link></li>
                    <li><Link to="/transportation/subscription">Subscription</Link></li>
                    <li><Link to="/transportation/billing">Billing</Link></li>
                    <li><Link to="/transportation/querry">Querry</Link></li>
                </ul>
            </Navbar>
            <Switch>
            <Route path="/transportation/existing-company">
            <ExistingCompany />
            </Route>
            <Route path="/transportation/drivers">
            <Driver />
            </Route><Route path="/transportation/rides">
            <RideHistory />
            </Route>
            <Route path="/transportation/billing">
            <Sonnet />
            </Route>
            <Route path="/transportation/subscription">
            <Subscription />
            </Route>
            <Route path="/transportation/querry">
            <Querry />
            </Route>
        </Switch>
        </Router>
        </div>
    )
}
