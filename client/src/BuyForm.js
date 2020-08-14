import React, { useState } from 'react';
import { drizzleReactHooks } from '@drizzle/react-plugin';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const { useDrizzle, useDrizzleState } = drizzleReactHooks;

const BuyForm = () => {
  const { drizzle, useCacheSend } = useDrizzle();
  console.log(useCacheSend)
  const drizzleState = useDrizzleState(state => state);
  const { send } = useCacheSend('TokenExchange', 'buyTokens');
  console.log('send: ', send)
  let [tokenAmount, setTokenAmount] = useState("");

  const handleOnChange = e => {
    setTokenAmount(e.target.value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    if(!tokenAmount) return;
    if(!Number(tokenAmount)) return;

    send(tokenAmount);
    setTokenAmount("");
  };

  return (
    <>
      <Row className="justify-content-center">
        <Col xs={10} md={8} style={{backgroundColor: "#E7E5E6", marginTop: 15, borderRadius: "10px", borderStyle: "solid", borderColor: "#BAE1DE"}}>
          <div className="text-center mt-3">
            Current exchange rate:  1 ETH = 50 tokens
          </div>

          <Form onSubmit={handleOnSubmit}>
            <Form.Group style={{marginTop: 15}}>
              <Form.Row>
                <Form.Label column xs={10}>
                  Enter the number of tokens to purchase
                </Form.Label>
                <Col xs={2}>
                  <Form.Control type="text" value={tokenAmount} onChange={handleOnChange}/>
                </Col>
              </Form.Row>

              <Form.Row style={{marginTop: 15}}>
                <Form.Label column xs={10}>
                  XXX GRT tokens = YYY ETH
                </Form.Label>
                <Col xs={2}>
                  <Button type="submit" style={{backgroundColor: "#C56BF2", borderColor: '#E3C5F1'}}>
                    Buy
                  </Button>
                </Col>
              </Form.Row>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default BuyForm;
