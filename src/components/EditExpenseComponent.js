import React, { useState, useEffect } from "react";
import { Button, Form, Input } from "reactstrap";

const EditExpenseForm = (props) => {
  const [expense, setExpense] = useState(props.currentExpense)

  useEffect(() => {
    setExpense(props.currentExpense)
  }, [props])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setExpense({ ...expense, [name]: value })
    if (name === 'amount') {
      expense.amount = parseInt(value)
    }
  }

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault()
        if (expense.amount) {
          expense.amount = parseInt(expense.amount)
        }
        if (!expense.name || !expense.category || !expense.amount) 
        return
        props.updateExpense(expense.id, expense)
      }}
    >
      <Input
        type="text"
        name="name"
        value={expense.name}
        onChange={handleInputChange}
      />
            <Input
        type="text"
        name="category"
        value={expense.category}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        name="amount"
        value={expense.amount}
        onChange={handleInputChange}
      />
      <Button>Update Expense</Button>
      <Button
        onClick={() => props.setEditing(false)}
      >
        Cancel
      </Button>
    </Form>
  )
};

export default EditExpenseForm;
