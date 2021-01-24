import React, { Component } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Container,
} from "reactstrap";

class ListRemaining extends Component {
  render() {
    return (
      <Container>
        <Form id="moneyLeft">
          <FormGroup row className="moneyLeftOverHeader">
            <Col>
              <Label for="moneyLeft">Money Left Over</Label>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col>
              <Label for="moneyLeft">Income Minus Expenses</Label>
            </Col>
            <Col>
              <Input className="moneyLeft"  />
            </Col>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}

export default ListRemaining;
