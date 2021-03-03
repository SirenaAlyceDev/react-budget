import React, { useState } from "react";
import { Button, Form, Input } from "reactstrap";

const AddIncomeForm = (props) => {
  const initialFormState = { id: null, name: "", amount: 0 };
  const [income, setIncome] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setIncome({ ...income, [name]: value })
    if (name === 'amount') {
      income.amount = parseInt(value)
    }
  }

  return (

    <Form onSubmit={event => {
      event.preventDefault()
      if (income.amount) {
        income.amount = parseInt(income.amount)
      }
      if (!income.name || !income.amount) 
      return
      props.addIncome(income)
      setIncome(initialFormState)
    }}>
      <Input type="text" name="name" placeholder="income name" value={income.name} onChange={handleInputChange} />
      <Input type="number" name="amount" placeholder="income amount" value={props.newint} onChange={handleInputChange} />
      <Button>Add New Income</Button>
    </Form>
  );
};

export default AddIncomeForm;
