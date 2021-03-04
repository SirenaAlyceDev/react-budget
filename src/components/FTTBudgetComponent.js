import React, { useState } from "react";
import { Row, Col, Container, Input, Button } from "reactstrap";

const FTTBudget = () => {
  const [income, setIncome] = useState(0);

  const handleInputChange = (event) => {
      setIncome(event.target.value)
  }

  const calculateNeeds = () => {
      let needs = Math.round(income * 0.5);
      return needs;
  }

  const calculateWants = () => {
    let wants = Math.round(income * 0.3);
    return wants;
}

const calculateSavings = () => {
    let savings = Math.round(income * 0.2);
    return savings;
}

const reset = () => {
    setIncome(0);
}

  return (
    <Container>
      <Row>
        <Col>
          <h1>50/30/20 Budget</h1>
          <p>little blurb about what a 50/30/20 budget is</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>calculator goes here</p>
          <h2>Monthly Income Amount</h2>
          <Input placeholder="Income Amount" value={income} onChange={handleInputChange} />
          {/* <Button onClick={()=> {calculateNeeds(); calculateWants(); calculateSavings()}}>Calculate My Budget</Button> */}
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Needs</h3>
          <p>{calculateNeeds()}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Wants</h3>
          <p>{calculateWants()}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Savings</h3>
          <p>{calculateSavings()}</p>
        </Col>
      </Row>
      <Button onClick={() => reset()}>Clear</Button>
    </Container>
  );
};

export default FTTBudget;
