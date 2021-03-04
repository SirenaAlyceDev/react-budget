import React from "react";
import { Table, Button } from "reactstrap";

const ExpenseTable = (props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Expense Name</th>
          <th>Expense Category</th>
          <th>Expense Amount</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.expenses.length > 0 ? (
          props.expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.name}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td>
                <Button
                  onClick={() => {
                    props.editExpenseRow(expense);
                  }}
                >
                  Edit
                </Button>
                <Button onClick={() => props.deleteExpense(expense.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td>No Expense Added</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default ExpenseTable;
