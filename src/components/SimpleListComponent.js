import React, { useState } from "react";
import { Row, Col, Container } from "reactstrap";
import IncomeTable from "./IncomeViewComponent";
import ExpenseTable from "./ExpenseViewComponent";
import AddIncomeForm from "./AddIncomeComponent";
import EditIncomeForm from "./EditIncomeComponent";
import AddExpenseForm from "./AddExpenseComponent";
import EditExpenseForm from "./EditExpenseComponent";
import { PieChart } from "react-minimal-pie-chart";

const ListBudget = (props) => {
  // income
  const incomeData = [{ id: 1, name: "example income", amount: 111 }];

  const initialFormState = { id: null, name: "", amount: "" };

  const [incomes, setIncomes] = useState(incomeData);
  const [editing, setEditing] = useState(false);
  const [currentIncome, setCurrentIncome] = useState(initialFormState);

  // expense

  const expenseData = [
    { id: 1, name: "example expense", category: "cat 1", amount: 111 },
  ];

  const initialExpenseState = { id: null, name: "", category: "", amount: "" };

  const [expenses, setExpenses] = useState(expenseData);
  const [currentExpense, setCurrentExpense] = useState(initialExpenseState);

  // other stuff

  const editRow = (income) => {
    setEditing(true);
    setCurrentIncome({
      id: income.id,
      name: income.name,
      amount: income.amount,
    });
  };

  const editExpenseRow = (expense) => {
    setEditing(true);
    setCurrentExpense({
      id: expense.id,
      name: expense.name,
      category: expense.category,
      amount: expense.amount,
    });
  };

  const updateIncome = (id, updatedIncome) => {
    setEditing(false);
    setIncomes(
      incomes.map((income) => (income.id === id ? updatedIncome : income))
    );
  };

  const updateExpense = (id, updatedExpense) => {
    setEditing(false);
    setExpenses(
      expenses.map((expense) => (expense.id === id ? updatedExpense : expense))
    );
  };

  const addIncome = (income) => {
    income.id = incomes.length + 1;
    setIncomes([...incomes, income]);
  };

  const addExpense = (expense) => {
    expense.id = expenses.length + 1;
    setExpenses([...expenses, expense]);
  };

  const deleteIncome = (id) => {
    setIncomes(incomes.filter((income) => income.id !== id));
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const calculations = () => {
    let initialValue = 0;
    let sum = incomes.reduce(function (a, c) {
      return a + c.amount;
    }, initialValue);
    return sum;
  };

  const expenseCalc = () => {
    let initialValue = 0;
    let sum = expenses.reduce(function (a, c) {
      return a + c.amount;
    }, initialValue);
    return sum;
  };

  const remainingCalc = () => {
    let remaining = calculations() - expenseCalc();
    return remaining;
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <h1>Simple List Budget</h1>
          <p>little blurb about what a simple list budget is</p>
        </Col>
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
        ) : (
          <Col>
            <h2>Add Your Income</h2>
            <AddIncomeForm addIncome={addIncome} />
          </Col>
        )}
        <Col>
          <h2>Your Income Sources:</h2>
          <IncomeTable
            incomes={incomes}
            deleteIncome={deleteIncome}
            editRow={editRow}
          />
          <h5>Total Monthly Income </h5>
          <p>{calculations()}</p>
        </Col>
      </Row>
      <Row>
        {editing ? (
          <Col>
            <h2>Edit Expense</h2>
            <EditExpenseForm
              setEditing={setEditing}
              currentExpense={currentExpense}
              updateExpense={updateExpense}
            />
          </Col>
        ) : (
          <Col>
            <h2>Add Your Expenses</h2>
            <AddExpenseForm addExpense={addExpense} />
          </Col>
        )}
        <Col>
          <h2>Your Monthly Expenses</h2>
          <ExpenseTable
            expenses={expenses}
            deleteExpense={deleteExpense}
            editExpenseRow={editExpenseRow}
          />
          <h5>Total Monthly Expenses</h5>
          <p>{expenseCalc()}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Remaining</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{remainingCalc()}</p>
        </Col>
      </Row>
      <Row>
        <Col>
        <PieChart
          viewBoxSize={[100,100]}
          radius={25}
            data={[
              { title: "One", value: 20, color: "#7bd5f5" },
              { title: "Two", value: 100, color: "#787ff6" },
            ]}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ListBudget;
