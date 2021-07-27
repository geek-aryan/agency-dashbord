import React from 'react'
import {Navbar} from 'react-bootstrap'
import {Link, BrowserRouter as Router, } from 'react-router-dom'


export default function CompanyDetails() {
    React.useEffect(
        ()=>{
            let  x = document.getElementById('trans-nav');
            x.style.display="none";
        }
    )
    // const [page, setPage] = React.useState(true);
    return (
        <div>
        <Router>
            <Navbar expand="lg" className="transportation-nav">
                <ul>
                    <li style={{width: "15%"}}><Link to="/transportation/existing-company" className="active">Existing-Company</Link></li>
                    <li><Link to="/transportation/cmpdrivers">Drivers</Link></li>
                    <li><Link to="/transportation/cmpsubscription">Subscription</Link></li>
                    <li style={{width: "15%"}}><Link to="/transportation/rideHistory">Ride History</Link></li>
                    <li><Link to="/transportation/billing">Billing</Link></li>
                    <li><Link to="/transportation/querry">Querry</Link></li>
                    
                </ul>
        </Navbar>
        {/* <Switch>
            <Route path="/transportation/existing-company">
            <ExistingCompany />
            </Route>
            <Route path="/transportation/cmpdrivers">
            <CompDriver />
            </Route>
            <Route path="/transportation/rideHistory">
            <RideHistory />
            </Route>
            <Route path="/transportation/billing">
            <Sonnet />
            </Route>
            <Route path="/transportation/cmpsubscription">
            <CompSubscription />
            </Route>
            <Route path="/transportation/querry">
            <Querry />
            </Route>
        </Switch> */}
        </Router>
        </div>
    )
}
