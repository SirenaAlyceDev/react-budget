import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Button,
  Row,
  Container,
} from "reactstrap";

const ListExpense = (props) => {
  const [inputList, setInputList] = useState([
    { expense: "", expenseamount: "" },
  ]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the remove Button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the add button
  const handleAddClick = () => {
    setInputList([...inputList, { expense: "", expenseamount: "" }]);
  };

  return (
    <React.Fragment>
      <div>
        <Container className="mb-1">
          <Row>
            <Col className="moneyOutHeader">
              <Label for="moneyOut">Money Out</Label>
            </Col>
          </Row>
        </Container>

        {inputList.map((x, i) => {
          return (
            <div className="box container">
              <Form id="moneyOutForm">
                <FormGroup row>
                  <Col>
                    <Input
                      type="text"
                      name="expense"
                      id="expense"
                      value={x.expense}
                      placeholder="expense name"
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </Col>
                  <Col>
                    <Input
                      type="number"
                      name="expenseamount"
                      id="expenseamount"
                      value={x.expenseamount}
                      placeholder="expense amount"
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </Col>
                  {inputList.length - 1 === i && (
                    <Button className="btn" onClick={handleAddClick} outline>
                      {" "}
                      +{" "}
                    </Button>
                  )}
                  {inputList.length !== 1 && (
                    <Button
                      className="btn"
                      onClick={() => handleRemoveClick(i)}
                      outline
                    >
                      {" "}
                      -{" "}
                    </Button>
                  )}
                </FormGroup>
              </Form>
            </div>
          );
        })}
        <Container>
          <Row>
            <Col>
              <Label for="totalIncome">Total Expenses</Label>
            </Col>
            <Col>
              <Input className="totalExpenses"  />
            </Col>
          </Row>
        </Container>
        <br />
      </div>
    </React.Fragment>
  );
};

export default ListExpense;
