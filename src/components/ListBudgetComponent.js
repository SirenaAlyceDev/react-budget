import React, { Component, useState } from "react";
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

const ListCalculator = (props) => {
  const [inputList, setInputList] = useState([{ income: "", amount: "" }]);

  return (
    <React.Fragment>
      <div>
        <h3>List Budget</h3>
      </div>
      <div>
        {inputList.map((x, i) => {
          return (
            <div className="box container">
              <Form id="moneyInForm">
                <FormGroup row className="moneyInHeader">
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
                  {inputList.length - 1 === i && <Button className="btn" outline>
                    {" "}
                    +{" "}
                  </Button>}
                  {inputList.length !== 1 && <Button className="btn" outline>
                    {" "}
                    -{" "}
                  </Button>}
                </FormGroup>
              </Form>
            </div>
          );
        })}
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

export default ListCalculator;
