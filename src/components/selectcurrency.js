import React from "react";
import {
  Row,
  Col,
  Card,
  Button,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap";

function SelectCurrency() {
  return (
    <div>
      <Row className="mb-2">
        <Col className="p-0">
          <Card className="pb-0" border="0">
            <Card.Header className="text-blue bg-darksecondary">
              Select Currency:
            </Card.Header>
            <Card.Body className="py-2">
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <Form.Control className="bg-darksecondary br-0" as="select">
                    <option>AFYA</option>
                    <option>ZAR</option>
                  </Form.Control>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="0.00000001"
                  aria-label="0.00000001"
                  aria-describedby="basic-addon1"
                  className="bg-light"
                />
              </InputGroup>

              <div className="d-flex justify-content-around ">
                <Button className="btn-blue">SEND</Button>
                <Button className="btn-blue">RECEIVE </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default SelectCurrency;
