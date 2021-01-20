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

const ListIncome = (props) => {
  const [inputList, setInputList] = useState([{ income: "", amount: "" }]);

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
    setInputList([...inputList, { income: "", amount: "" }]);
  };

  return (
    <React.Fragment>
      <div>
        <h3>List Budget</h3>
      </div>
      <div>
        <Container className="mb-1">
          <Row>
            <Col className="moneyInHeader">
              <Label for="moneyIn">Money In</Label>
            </Col>
          </Row>
        </Container>

        {inputList.map((x, i) => {
          return (
            <div className="box container">
              <Form id="moneyInForm">
                <FormGroup row>
                  <Col>
                    <Input
                      type="text"
                      name="income"
                      id="income"
                      value={x.income}
                      placeholder="paycheck nickname"
                      onChange={(e) => handleInputChange(e, i)}
                    />
                  </Col>
                  <Col>
                    <Input
                      type="number"
                      name="amount"
                      id="incomeAmount"
                      value={x.amount}
                      placeholder="paycheck amount"
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
              <Label for="totalIncome">Total Income</Label>
            </Col>
            <Col>
              <Input className="totalIncome" disabled />
            </Col>
          </Row>
        </Container>
        <br />
      </div>
    </React.Fragment>
  );
};

//   //return (
// //       <Container>
// //         <Row>
// //           <Col>
// //             <h1>Simple List Budget</h1>
// //           </Col>
// //         </Row>
// //         <Row>
// //           <Col>
// //             <Form id="moneyInForm">
// //               <FormGroup
// //                 row
// //                 className="moneyInHeader"
// //               >
// //                 <Col>
// //                   <Label for="moneyIn">Money In</Label>
// //                 </Col>
// //               </FormGroup>
// //               <FormGroup row>
// //                 <Col>
// //                   <Input
// //                     type="text"
// //                     name="income"
// //                     id="income"
// //                     placeholder="paycheck nickname"
// //                   />
// //                 </Col>
// //                 <Col>
// //                   <Input
// //                     type="number"
// //                     name="amount"
// //                     id="incomeAmount"
// //                     placeholder="paycheck amount"
// //                   />
// //                 </Col>
// //                 <Button className="btn" outline>
// //                   {" "}
// //                   +{" "}
// //                 </Button>
// //                 <Button className="btn" outline>
// //                   {" "}
// //                   -{" "}
// //                 </Button>
// //               </FormGroup>
// //               <FormGroup row>
// //                 <Col>
// //                   <Label for="totalIncome">Total Income</Label>
// //                 </Col>
// //                 <Col>
// //                   <Input className="totalIncome" disabled />
// //                 </Col>
// //               </FormGroup>
// //               <br />
// //             </Form>
// //             );
// // })}
//             {/* <Form id="moneyOutForm">
//               <FormGroup
//                 row
//                 className="moneyOutHeader"
//               >
//                 <Col>
//                   <Label for="moneyOut">Money Out</Label>
//                 </Col>
//               </FormGroup>
//               <FormGroup row>
//                 <Col>
//                   <Input
//                     type="text"
//                     name="expense"
//                     id="expense"
//                     placeholder="expense name"
//                   />
//                 </Col>
//                 <Col>
//                   <Input
//                     type="number"
//                     name="expenseamount"
//                     id="expenseamount"
//                     placeholder="expense amount"
//                   />
//                 </Col>
//                 <Button className="btn" outline>
//                   {" "}
//                   +{" "}
//                 </Button>
//                 <Button className="btn" outline>
//                   {" "}
//                   -{" "}
//                 </Button>
//               </FormGroup>
//               <FormGroup row>
//                 <Col>
//                   <Label for="totalExpense">Total Expense</Label>
//                 </Col>
//                 <Col>
//                   <Input className="totalExpense" disabled />
//                 </Col>
//               </FormGroup>
//             </Form>
//             <Form id="moneyLeft">
//               <FormGroup
//                 row
//                 className="moneyLeftOverHeader"
//               >
//                 <Col>
//                   <Label for="moneyLeft">Money Left Over</Label>
//                 </Col>
//               </FormGroup>
//               <FormGroup row>
//                 <Col>
//                   <Label for="moneyLeft">Income Minus Expenses</Label>
//                 </Col>
//                 <Col>
//                   <Input className="moneyLeft" disabled />
//                 </Col>
//               </FormGroup>
//             </Form> */}
//           {/* </Col>
//           <Col>
//           Dashboard will go here
//           </Col>
//         </Row>
//       </Container> */}

export default ListIncome;
