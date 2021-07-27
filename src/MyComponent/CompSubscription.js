import React from 'react'
import { Container,Table } from 'react-bootstrap'

export default function CompSubscription() {
    return (
        <div>
            <h3 align="left">Subscription History</h3> 
            <br />
            <Container>
            
            <Table responsive="sm" >
            <thead>
            <tr>
                <th>S.No</th>
                <th>Subscription ID</th>
                <th>Package</th>
                <th>Amount</th>
                <th>Activation Date</th>
                <th>Valid Till</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>101</td>
                <td>Company </td>
                <td>10</td>
                <td>12/06/2001</td>
                <td>11/06/2003</td>
                <td>Lorem</td>
            </tr>
            <tr>
                <td>2</td>
                <td>101</td>
                <td>Name</td>
                <td>8</td>
                <td>12/06/2003</td>
                <td>11/06/2005</td>
                <td>Lorem</td>
            </tr>
            <tr>
                <td>3</td>
                <td>101</td>
                <td>Name</td>
                <td>5</td>
                <td>12/06/2005</td>
                <td>11/06/207</td>
                <td>Lorem</td>
            </tr>
            <tr>
                <td>4</td>
                <td>101</td>
                <td>Name</td>
                <td>13</td>
                <td>12/06/2007</td>
                <td>11/06/2009</td>
                <td>Lorem</td>
            </tr>
            <tr>
                <td>5</td>
                <td>101</td>
                <td>Name</td>
                <td>8</td>
                <td>12/06/2009</td>
                <td>11/06/2011</td>
                <td>Lorem</td>
            </tr>
            <tr>
                <td>6</td>
                <td>101</td>
                <td>Name</td>
                <td>11</td>
                <td>12/06/2011</td>
                <td>11/06/2013</td>
                <td>Lorem</td>
            </tr>
            <tr>
                <td>7</td>
                <td>101</td>
                <td>Name</td>
                <td>7</td>
                <td>12/06/2013</td>
                <td>11/06/2015</td>
                <td>Lorem</td>
            </tr>
            <tr>
                <td>8</td>
                <td>101</td>
                <td>Name</td>
                <td>6</td>
                <td>12/06/2015</td>
                <td>11/06/2017</td>
                <td>Lorem</td>
            </tr>
            <tr>
                <td>9</td>
                <td>101</td>
                <td>Name</td>
                <td>15</td>
                <td>12/06/2017</td>
                <td>11/06/2019</td>
                <td>Lorem</td>
            </tr>
            <tr>
                <td>10</td>
                <td>101</td>
                <td>Name</td>
                <td>10</td>
                <td>12/06/2019</td>
                <td>11/06/2021</td>
                <td>Lorem</td>
            </tr>
            </tbody>
            </Table>
        </Container>
        </div>
    )
}
