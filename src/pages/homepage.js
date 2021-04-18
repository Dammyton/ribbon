import React from "react";
import { Container } from "react-bootstrap";
import BalanceCard from "../components/Cards/balancecard";
import Header from "../components/header";
import SelectCurrency from "../components/selectcurrency";
import RecentActivity from "../components/recentactivity";
import NavBar from "../components/navbar";

export default function Homepage() {
  return (
    <div>
      <Container fluid>
        <Header />
        <BalanceCard />
        <SelectCurrency />
        <RecentActivity />
        <NavBar />
      </Container>
    </div>
  );
}
