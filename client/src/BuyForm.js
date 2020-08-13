import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const BuyForm = () => {
  const [tokenAmount, setTokenAmount] = useState("");

  const handleOnChange = e => {
    setTokenAmount(e.target.value);
    return;
  };

  return (
    <>
      <Row className="justify-content-center">
        <Col xs={10} md={8} style={{backgroundColor: "#E7E5E6", marginTop: 15, borderRadius: "10px", borderStyle: "solid", borderColor: "#BAE1DE"}}>
          <div className="text-center mt-3">
            Current exchange rate:  1 ETH = 50 tokens
          </div>

          <Form.Group style={{marginTop: 15}}>
            <Form.Row>
              <Form.Label column xs={10}>
                Enter the number of tokens to purchase
              </Form.Label>
              <Col xs={2}>
                <Form.Control type="text" placeholder="0" value={tokenAmount} onChange={handleOnChange}/>
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group style={{marginTop: 15}}>
            <Form.Row>
              <Form.Label column xs={10}>
                XXX GRT tokens = YYY ETH
              </Form.Label>
              <Col xs={2}>
                <Button style={{backgroundColor: "#C56BF2", borderColor: '#E3C5F1'}}>
                  Buy
                </Button>
              </Col>
            </Form.Row>
          </Form.Group>
        </Col>
      </Row>
    </>
  );
};


export default BuyForm;
