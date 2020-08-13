import React from 'react';
import { drizzleReactHooks } from '@drizzle/react-plugin';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BalanceExchange from './BalanceExchange';
import BuyForm from './BuyForm';
import SellForm from './SellForm';

const { useDrizzle, useDrizzleState } = drizzleReactHooks;

const Exchange = () => {
  const { drizzle } = useDrizzle();
  const state = useDrizzleState(state => state);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={10} md={8} style={{backgroundColor: "#E7E5E6", marginTop: 15, borderRadius: "10px", borderStyle: "solid", borderColor: "#BAE1DE"}}>
          <div className="p-3 text-center">
            <BalanceExchange />
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center mt-3">
        <Col xs={10} md={8} className="justify-content-center">
          <Row>
            <Button size="lg">
              Buy tokens
            </Button>
            <Button size="lg" className="ml-auto">
              Sell tokens
            </Button>
          </Row>
        </Col>
      </Row>

      <BuyForm />
      <SellForm />

    </Container>
  );
};

export default Exchange;
