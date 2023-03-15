import React from "react";
import { Col, Container, Row, Table, Button } from "react-bootstrap";
import { MdOutlineLogout } from "react-icons/md";
import "./History.css";

export default function History() {
  return (
    <>
      <Container>
      <div id="home7">
          <div id="home8">INVOICE</div>
          <div id="home10">
            Logout
            <MdOutlineLogout />
          </div>
        </div>
        <Row>
          <Col id="history1">History</Col>
          <Table id="history3">
            <thead>
              <tr id="history2">
                <th id="history7">No.</th>
                <th id="history7">Invoice</th>
                <th id="history7">Id</th>
                <th id="history7">Date</th>
                <th id="history7">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>PRO Billing Software with extra tools</td>
                <td>342354235</td>
                <td>15/03/2023</td>
                <th>
                  {" "}
                  <Button id="history6">Download Again</Button>{" "}
                </th>
              </tr>
              <tr>
                <td>1</td>
                <td>PRO Billing Software with extra tools</td>
                <td>342354235</td>
                <td>15/03/2023</td>
                <th>
                  {" "}
                  <Button id="history6">Download Again</Button>{" "}
                </th>
              </tr>
              <tr>
                <td>1</td>
                <td>PRO Billing Software with extra tools</td>
                <td>342354235</td>
                <td>15/03/2023</td>
                <th>
                  {" "}
                  <Button id="history6">Download Again</Button>{" "}
                </th>
              </tr>
              <tr>
                <td>1</td>
                <td>PRO Billing Software with extra tools</td>
                <td>342354235</td>
                <td>15/03/2023</td>
                <th>
                  {" "}
                  <Button id="history6">Download Again</Button>{" "}
                </th>
              </tr>
              <tr>
                <td>1</td>
                <td>PRO Billing Software with extra tools</td>
                <td>342354235</td>
                <td>15/03/2023</td>
                <th>
                  {" "}
                  <Button id="history6">Download Again</Button>{" "}
                </th>
              </tr>
              <tr>
                <td>1</td>
                <td>PRO Billing Software with extra tools</td>
                <td>342354235</td>
                <td>15/03/2023</td>
                <th>
                  {" "}
                  <Button id="history6">Download Again</Button>{" "}
                </th>
              </tr>
              <tr>
                <td>1</td>
                <td>PRO Billing Software with extra tools</td>
                <td>342354235</td>
                <td>15/03/2023</td>
                <th>
                  {" "}
                  <Button id="history6">Download Again</Button>{" "}
                </th>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
}
