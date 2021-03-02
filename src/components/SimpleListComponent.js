import React, { useState } from 'react';
import { Row, Col, Container } from "reactstrap";
import IncomeTable from './IncomeViewComponent';
import AddIncomeForm from './AddIncomeComponent';
import EditIncomeForm from './EditIncomeComponent';

const ListBudget = () => {
  const incomeData = [
    { id: 1, name: 'income 1', amount: 111 },
    { id: 2, name: 'income 2', amount: 222 },
    { id: 3, name: 'income 3', amount: 333 },
  ]

  const initialFormState = { id: null, name: '', amount: 0 }

  const [incomes, setIncomes] = useState(incomeData);
  const [editing, setEditing] = useState(false);
  const [currentIncome, setCurrentIncome] = useState(initialFormState);

  const editRow = (income) => {
    setEditing(true)
    setCurrentIncome({id: income.id, name: income.name, amount: income.amount })
  }

  const updateIncome = (id, updatedIncome) => {
    setEditing(false)
    setIncomes(incomes.map((income) => (income.id === id ? updatedIncome : income)))
  }
  const addIncome = (income) => {
    income.id = incomes.length + 1
    setIncomes([...incomes, income])
  }

  const deleteIncome = (id) => {
    setIncomes(incomes.filter((income) => income.id !== id))
  }

  return (
    <Container>
      <Row>
      <h1>Simple List Budget</h1>
      </Row>
      <Row>
        {editing ? (
          <Col>
          <h2>Edit Income</h2>
          <EditIncomeForm
          setEditing={setEditing}
          currentIncome={currentIncome}
          updateIncome={updateIncome}
          />
          </Col>
        ):(
          <Col>
          <h2>
            Add Your Income
          </h2>
          <AddIncomeForm addIncome={addIncome} />
          </Col>
        )}
      <Col>
      <h2>
        Your Income Sources:
      </h2>
      <IncomeTable incomes={incomes} deleteIncome={deleteIncome} editRow={editRow} />
      </Col>
      </Row>
    </Container>
  )
}

export default ListBudget;