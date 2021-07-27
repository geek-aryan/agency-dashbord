import React from 'react'
import {Table,Container} from 'react-bootstrap'
import { Link} from 'react-router-dom'
export default function ExistingAgency() {
    return (
        <div>
            <h3 align="left">Existing Agencies</h3> 
            <br />
            <Container>
            <Table responsive="sm" >
            <thead>
            <tr>
                <th>S.No</th>
                <th>Agency ID</th>
                <th>Agency Name</th>
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
                <td><Link to="">101</Link></td>
                <td>Agency Name</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>Bengluru</td>
                <td>Karnatka</td>
                <td>12-06-2021</td>
            </tr>
            <tr>
                <td>2</td><td>101</td>
                <td>Agency Name</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>Bengluru</td>
                <td>Karnatka</td>
                <td>12-06-2021</td>
            </tr>
            <tr>
                <td>3</td><td>101</td>
                <td>Agency Name</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>Bengluru</td>
                <td>Karnatka</td>
                <td>12-06-2021</td>
            </tr>
            <tr>
                <td>4</td><td>101</td>
                <td>Agency Name</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>Bengluru</td>
                <td>Karnatka</td>
                <td>12-06-2021</td>
            </tr>
            <tr>
                <td>5</td><td>101</td>
                <td>Agency Name</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>Bengluru</td>
                <td>Karnatka</td>
                <td>12-06-2021</td>
            </tr>
            <tr>
                <td>6</td><td>101</td>
                <td>Agency Name</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>Bengluru</td>
                <td>Karnatka</td>
                <td>12-06-2021</td>
            </tr>
            <tr>
                <td>7</td><td>101</td>
                <td>Agency Name</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>Bengluru</td>
                <td>Karnatka</td>
                <td>12-06-2021</td>
            </tr>
            <tr>
                <td>8</td><td>101</td>
                <td>Agency Name</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>Bengluru</td>
                <td>Karnatka</td>
                <td>12-06-2021</td>
            </tr>
            <tr>
                <td>9</td><td>101</td>
                <td>Agency Name</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>Bengluru</td>
                <td>Karnatka</td>
                <td>12-06-2021</td>
            </tr>
            <tr>
                <td>10</td><td>101</td>
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
        </div>
    )
}
