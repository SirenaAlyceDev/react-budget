import React, { useState } from "react";
import { Button, Form, Input } from "reactstrap";

const AddExpenseForm = (props) => {
  const initialFormState = { id: null, name: "", category:"",amount: "" };
  const [expense, setExpense] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setExpense({ ...expense, [name]: value })
    if (name === 'amount') {
      expense.amount = parseInt(value)
    }
  }

  return (

    <Form onSubmit={event => {
      event.preventDefault()
      if (expense.amount) {
        expense.amount = parseInt(expense.amount)
      }
      if (!expense.name || !expense.category || !expense.amount) 
      return
      props.addExpense(expense)
      setExpense(initialFormState)
    }}>
      <Input type="text" name="name" placeholder="expense name" value={expense.name} onChange={handleInputChange} />
      <Input type="text" name="category" placeholder="expense category" value={expense.category} onChange={handleInputChange} />
      <Input type="text" name="amount" placeholder="expense amount" value={expense.amount} onChange={handleInputChange} />
      <Button>Add New Expense</Button>
    </Form>
  );
};

export default AddExpenseForm;
