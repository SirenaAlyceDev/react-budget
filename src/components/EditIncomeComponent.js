import React, { useState, useEffect } from "react";
import { Button, Form, Input } from "reactstrap";

const EditIncomeForm = (props) => {
  const [income, setIncome] = useState(props.currentIncome)

  useEffect(() => {
    setIncome(props.currentIncome)
  }, [props])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setIncome({ ...income, [name]: value })
    if (name === 'amount') {
      income.amount = parseInt(value)
    }
  }

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault()
        if (income.amount) {
          income.amount = parseInt(income.amount)
        }
        if (!income.name || !income.amount) 
        return
        props.updateIncome(income.id, income)
      }}
    >
      <Input
        type="text"
        name="name"
        value={income.name}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        name="amount"
        value={income.amount}
        onChange={handleInputChange}
      />
      <Button>Update Income</Button>
      <Button
        onClick={() => props.setEditing(false)}
      >
        Cancel
      </Button>
    </Form>
  )
};

export default EditIncomeForm;
