import React from "react";
import { Row, Col, Card, ListGroup } from "react-bootstrap";
import { activities } from "./common/recentactivities";

function RecentActivity() {
  return (
    <div>
      <Row className="mb-2">
        <Col className="p-0">
          <Card className="pb-0" border="0">
            <Card.Header className="text-white bg-darksecondary">
              Recent Activity
            </Card.Header>
            <ListGroup variant="flush">
              {activities.map((item) => {
                return (
                  <ListGroup.Item key={item.name}>
                    <div className="d-flex justify-content-between font-weight-400">
                      <img
                        src={item.icon}
                        className="icon-size"
                        alt={item.name}
                      />
                      <h6 className="mb-0">{item.name}</h6>
                      <h6 className="mb-0">{item.amount}</h6>
                    </div>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
            <Card.Footer className="bg-darksecondary py-3"></Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default RecentActivity;
