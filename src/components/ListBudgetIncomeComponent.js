import React, { useState } from "react";
import List from "./ListBudgetIncomeList";
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

const ALL_INCOME = [
  { id: 0, name: "paycheck", amount: 100 },
  { id: 1, name: "paycheck2", amount: 100 },
];

function ListIncome() {
  const [income, setIncome] = useState(ALL_INCOME);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleName = event => {
    console.log('Name', event.target.value)
    setName(event.target.value)
  }

  const handleAmount = event => {
    console.log('amount', event.target.value)
    setAmount(event.target.value)
  }

  const handleSubmitForm = event => {
    event.preventDefault()
    if (name !== '' && amount >0) {
      const newincome ={name, amount}
      setIncome([...income, newincome])
      setName('')
      setAmount('')
    } else {
      alert('invalid input')
    }
  }

  return (
    <React.Fragment>
      <div>
        <h3>List Budget</h3>
      </div>
      <div>
        <Container className="mb-1">
          <Row>
            <Col className="moneyInHeader mb-1">
              <Label for="moneyIn">Money In</Label>
            </Col>
          </Row>
          <Form id="moneyInForm" onSubmit={handleSubmitForm}>
            <FormGroup row>
              <Col>
                <Input
                  type="text"
                  name="income"
                  id="income"
                  placeholder="income nickname"
                  value={name}
                  onChange={handleName}
                />
              </Col>
              <Col>
                <Input
                  type="number"
                  name="amount"
                  id="incomeAmount"
                  placeholder="paycheck amount"
                  value={amount}
                  onChange={handleAmount}
                />
              </Col>
              <Button className="btn" type="submit" outline>
                {" "}
                +{" "}
              </Button>
            </FormGroup>
          </Form>
          <List income={income} />
          <Container>
            <Row>
              <Col>
                <Label for="totalIncome">Total Income</Label>
              </Col>
              <Col>
                {income.reduce((acc, curr) => {
                  return (acc += parseInt(curr.amount));
                }, 0)}
              </Col>
            </Row>
            <Row>
              <Col>
              <Button className="btn" color="danger">Delete All</Button>
              </Col>
            </Row>
          </Container>
          <br />
        </Container>
      </div>
    </React.Fragment>
  );
}

// const ListIncome = (props) => {
//   const [inputList, setInputList] = useState([{ income: "", amount: "" }]);

//   // handle input change
//   const handleInputChange = (e, index) => {
//     const { name, value } = e.target;
//     const list = [...inputList];
//     list[index][name] = value;
//     setInputList(list);
//   };

//   // handle click event of the remove Button
//   const handleRemoveClick = (index) => {
//     const list = [...inputList];
//     list.splice(index, 1);
//     setInputList(list);
//   };

//   // handle click event of the add button
//   const handleAddClick = () => {
//     setInputList([...inputList, { income: "", amount: "" }]);
//   };

//   return (
//     <React.Fragment>
//       <div>
//         <h3>List Budget</h3>
//       </div>
//       <div>
//         <Container className="mb-1">
//           <Row>
//             <Col className="moneyInHeader">
//               <Label for="moneyIn">Money In</Label>
//             </Col>
//           </Row>
//         </Container>

//         {inputList.map((x, i) => {
//           return (
//             <div className="box container">
//               <Form id="moneyInForm">
//                 <FormGroup row>
//                   <Col>
//                     <Input
//                       type="text"
//                       name="income"
//                       id="income"
//                       value={x.income}
//                       placeholder="paycheck nickname"
//                       onChange={(e) => handleInputChange(e, i)}
//                     />
//                   </Col>
//                   <Col>
//                     <Input
//                       type="number"
//                       name="amount"
//                       id="incomeAmount"
//                       value={x.amount}
//                       placeholder="paycheck amount"
//                       onChange={(e) => handleInputChange(e, i)}
//                     />
//                   </Col>
//                   {inputList.length - 1 === i && (
//                     <Button className="btn" onClick={handleAddClick} outline>
//                       {" "}
//                       +{" "}
//                     </Button>
//                   )}
//                   {inputList.length !== 1 && (
//                     <Button
//                       className="btn"
//                       onClick={() => handleRemoveClick(i)}
//                       outline
//                     >
//                       {" "}
//                       -{" "}
//                     </Button>
//                   )}
//                 </FormGroup>
//               </Form>
//             </div>
//           );
//         })}
//         <Container>
//           <Row>
//             <Col>
//               <Label for="totalIncome">Total Income</Label>
//             </Col>
//             <Col>
//               <Input className="totalIncome" />
//             </Col>
//           </Row>
//         </Container>
//         <br />
//       </div>
//     </React.Fragment>
//   );
// };

export default ListIncome;
