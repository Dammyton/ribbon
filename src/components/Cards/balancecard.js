import React from "react";
import { Row, Col, Card } from "react-bootstrap";

function BalanceCard() {
  return (
    <div>
      <Row className="mb-4 shadow text-center text-white font-weight-bold">
        <Col className=" p-0 ">
          <Card className="bg-pink br-l-5">
            <Card.Body className="py-2">
              <center>
                <h6 className="afya">AFYA</h6>
              </center>
              <Card.Title className="mb-0">143.00</Card.Title>
              <small>Balance</small>
            </Card.Body>
          </Card>
        </Col>
        <Col className="p-0">
          <Card className="br-r-5 bg-pink">
            <Card.Body className="py-2">
              <center>
                <h6 className="zar">ZAR</h6>
              </center>
              <Card.Title className="mb-0">R21.00</Card.Title>
              <small>Equivalent</small>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default BalanceCard;
