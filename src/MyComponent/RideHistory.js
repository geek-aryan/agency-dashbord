import React from 'react'
import { Container,Table } from 'react-bootstrap'

export default function RideHistory() {
    return (
        <div>
            <h3 align="left">Ride History</h3> 
            <br />
            <Container>
            
            <Table responsive="sm" >
            <thead>
            <tr>
                <th>S.No</th>
                <th>Ride ID</th>
                <th>Company Name</th>
                <th>No of Employee</th>
                <th>Driver Id</th>
                <th>Ride Timing</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>101</td>
                <td>Company Name</td>
                <td>10</td>
                <td>8877665544</td>
                <td>Bengluru</td>
                <td>Lorem</td>
            </tr>
            <tr>
                <td>2</td>
                <td>101</td>
                <td>Company Name</td>
                <td>8</td>
                <td>8877665544</td>
                <td>Bengluru</td>
                <td>Lorem</td>
            </tr>
            <tr>
                <td>3</td>
                <td>101</td>
                <td>Company Name</td>
                <td>5</td>
                <td>8877665544</td>
                <td>Bengluru</td>
                <td>Lorem</td>
            </tr>
            <tr>
                <td>4</td>
                <td>101</td>
                <td>Company Name</td>
                <td>13</td>
                <td>8877665544</td>
                <td>Bengluru</td>
                <td>Lorem</td>
            </tr>
            <tr>
                <td>5</td>
                <td>101</td>
                <td>Company Name</td>
                <td>8</td>
                <td>8877665544</td>
                <td>Bengluru</td>
                <td>Lorem</td>
            </tr>
            <tr>
                <td>6</td>
                <td>101</td>
                <td>Company Name</td>
                <td>11</td>
                <td>8877665544</td>
                <td>Bengluru</td>
                <td>Lorem</td>
            </tr>
            <tr>
                <td>7</td>
                <td>101</td>
                <td>Company Name</td>
                <td>7</td>
                <td>8877665544</td>
                <td>Bengluru</td>
                <td>Lorem</td>
            </tr>
            <tr>
                <td>8</td>
                <td>101</td>
                <td>Company Name</td>
                <td>6</td>
                <td>8877665544</td>
                <td>Bengluru</td>
                <td>Lorem</td>
            </tr>
            <tr>
                <td>9</td>
                <td>101</td>
                <td>Company Name</td>
                <td>15</td>
                <td>8877665544</td>
                <td>Bengluru</td>
                <td>Lorem</td>
            </tr>
            <tr>
                <td>10</td>
                <td>101</td>
                <td>Company Name</td>
                <td>10</td>
                <td>8877665544</td>
                <td>Bengluru</td>
                <td>Lorem</td>
            </tr>
            </tbody>
            </Table>
        </Container>
        </div>
    )
}
