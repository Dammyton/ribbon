import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <>
      <Navbar bg="white" expand="lg" fixed="bottom">
        <Nav.Link href="/">
          <div className="text-center">
            <i className="fa fa-home menu-icon" aria-hidden="true"></i>
            <h6 className="mb-0">Home</h6>
          </div>
        </Nav.Link>
        <Nav.Link href="/activity">
          <div className="text-center">
            <i className="fa fa-bars menu-icon" aria-hidden="true"></i>
            <h6 className="mb-0">Activity</h6>
          </div>
        </Nav.Link>
        <Nav.Link href="/wallet">
          <div className="text-center">
            <i className="fa fa-folder-open menu-icon" aria-hidden="true"></i>
            <h6 className="mb-0">Wallet</h6>
          </div>
        </Nav.Link>
        <Nav.Link href="/market">
          <div className="text-center">
            <i
              className="fa fa-shopping-basket menu-icon"
              aria-hidden="true"
            ></i>
            <h6 className="mb-0">Market</h6>
          </div>
        </Nav.Link>
        <Nav.Link href="/earn">
          <div className="text-center">
            <i className="fa fa-archive menu-icon" aria-hidden="true"></i>
            <h6 className="mb-0">Earn</h6>
          </div>
        </Nav.Link>
      </Navbar>
    </>
  );
}

export default NavBar;
