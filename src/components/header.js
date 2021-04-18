import React from "react";
import { Row, Col } from "react-bootstrap";
import logo from "../assets/logo.png";

function Header() {
  return (
    <div>
      <Row className="mb-2">
        <Col className="d-flex justify-content-between">
          <img src={logo} alt="logo" className="logo-size" />
          <div className="d-flex align-items-center">
            <i
              className="fa fa-user-circle-o text-pink mr-2 size"
              aria-hidden="true"
            ></i>
            <i className="fa fa-bell text-pink" aria-hidden="true"></i>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
