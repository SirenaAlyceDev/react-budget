import React, { useState } from "react";
import { Row, Col, Container, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const IncomeView = (props) => {
  return (
    <>
      <Row>
        <Col>
          <p>income name</p>
        </Col>
        <Col>
          <p>income amount</p>
        </Col>
        <Col>
          <p>action</p>
        </Col>
      </Row>
        {props.income.length > 0 ? (
        props.income.map((income) => (
          <Row key={income.id}>
            <Col>{income.name}</Col>
            <Col>{income.amount}</Col>
            <Button>Edit</Button><Button>Delete</Button>
          </Row>
        ))
      ) : (
        <Row>
          <Col>No Income Added</Col>
        </Row>
      )}
    </>
  );
};

const ListBudget = () => {
  const incomeData = [
    { id: 1, name: "income 1", amount: "100" },
    { id: 2, name: "income 2", amount: "200" },
    { id: 3, name: "income 3", amount: "200" },

  ];

  const [income, setIncome] = useState(incomeData);

  return (
    <Container>
      <Row>
        <Col>
          <h1>Simple List Budget</h1>
        </Col>
      </Row>
      <Row>
        <h2>Income</h2>
      </Row>
      <Row>
        <Col>
          <p>List your monthly sources of income:</p>
        </Col>
        <Col>
          <p>Here are your monthly income sources:</p>
          <IncomeView income={income}/>
        </Col>
      </Row>
      <Row>
        <h2>Expenses</h2>
      </Row>
      <Row>
        <Col>
          <p>List your monthly expenses:</p>
        </Col>
        <Col>
          <p>Here are your monthly expenses:</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Left Over</h2>
          <p>Here is what's left over</p>
          {/* if the number is negative add comment - our budget needs some work */}
          {/* if number is positive add comment - you're doing great let's save/invest */}
        </Col>
      </Row>
    </Container>
  );
};

export default ListBudget;
