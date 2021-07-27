import React from 'react'
import {Table,Row,Col} from 'react-bootstrap'
export default function CompDriver() {
    return (
        <div className="query-table">
            <Row style={{padding:"20px"}}>
                <Col md={6}>
                <h3 align="left">Existing Drivers </h3> 
                </Col>     
           </Row>
            <Table responsive="sm">
            <thead>
            <tr>
                <th className="col-xs-1">S.No</th>
                <th className="col-xs-2">Driver Id</th>
                <th className="col-xs-4">Email</th>
                <th className="col-xs-2">Mobile No</th>
                <th className="col-xs-3">Vehicle</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>110025415</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>2</td>
                <td>110025415</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>No</td>
            </tr>
            <tr>
                <td>3</td>
                <td>110025415</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>No</td>
            </tr>
            <tr>
                <td>4</td>
                <td>110025415</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>5</td>
                <td>110025415</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>6</td>
                <td>110025415</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>No</td>
            </tr>
            <tr>
                <td>7</td>
                <td>110025415</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>8</td>
                <td>110025415</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>9</td>
                <td>110025415</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>10</td>
                <td>110025415</td>
                <td>abc@test.com</td>
                <td>+91 8877665544</td>
                <td>No</td>
            </tr>
            </tbody>
            </Table>
        </div>
    )
}


