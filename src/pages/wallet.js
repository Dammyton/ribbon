import React from "react";
import { Container } from "react-bootstrap";
import Header from "../components/header";
import NavBar from "../components/navbar";

export default function Wallet() {
  return (
    <div>
      <Container fluid>
        <Header />
        <h2 className="mt-3">Wallet</h2>
        <NavBar />
      </Container>
    </div>
  );
}
