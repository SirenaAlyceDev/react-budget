import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Col, Button } from "reactstrap";

class ListCalculator extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Form id="moneyInForm">
              <FormGroup
                row
                style={{ backgroundColor: "#28a745", color: "#fff" }}
              >
                <Col>
                  <Label for="moneyIn">Money In</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col>
                  <Input
                    type="text"
                    name="income"
                    id="income"
                    placeholder="paycheck nickname"
                  />
                </Col>
                <Col>
                  <Input
                    type="number"
                    name="amount"
                    id="incomeAmount"
                    placeholder="paycheck amount"
                  />
                </Col>
                <Button className="btn" outline>
                  {" "}
                  +{" "}
                </Button>
                <Button className="btn" outline>
                  {" "}
                  -{" "}
                </Button>
              </FormGroup>
              <FormGroup row>
                <Col>
                  <Label for="totalIncome">Total Income</Label>
                </Col>
                <Col>
                  <Input className="totalIncome" disabled />
                </Col>
              </FormGroup>
              <br />
            </Form>
            <Form id="moneyOutForm">
              <FormGroup
                row
                style={{ backgroundColor: "#dc3545", color: "#fff" }}
              >
                <Col>
                  <Label for="moneyOut">Money Out</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col>
                  <Input
                    type="text"
                    name="expense"
                    id="expense"
                    placeholder="expense name"
                  />
                </Col>
                <Col>
                  <Input
                    type="number"
                    name="expenseamount"
                    id="expenseamount"
                    placeholder="expense amount"
                  />
                </Col>
                <Button className="btn" outline>
                  {" "}
                  +{" "}
                </Button>
                <Button className="btn" outline>
                  {" "}
                  -{" "}
                </Button>
              </FormGroup>
              <FormGroup row>
                <Col>
                  <Label for="totalExpense">Total Expense</Label>
                </Col>
                <Col>
                  <Input className="totalExpense" disabled />
                </Col>
              </FormGroup>
            </Form>
            <Form id="moneyLeft">
              <FormGroup
                row
                style={{ backgroundColor: "#007bff", color: "#fff" }}
              >
                <Col>
                  <Label for="moneyLeft">Money Left Over</Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col>
                  <Label for="moneyLeft">Income Minus Expenses</Label>
                </Col>
                <Col>
                  <Input className="moneyLeft" disabled />
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default ListCalculator;
