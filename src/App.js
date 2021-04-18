import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Activity from "./pages/activity";
import Wallet from "./pages/wallet";
import Market from "./pages/market";
import Earn from "./pages/earn";

function App() {
  return (
    <Container className="pt-3" fluid>
      <Row>
        <Col></Col>
        <Col sm="12" lg="8" md="8" className="px-0">
          <Router>
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/activity" component={Activity} />
              <Route path="/wallet" component={Wallet} />
              <Route path="/market" component={Market} />
              <Route path="/earn" component={Earn} />
            </Switch>
          </Router>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default App;
