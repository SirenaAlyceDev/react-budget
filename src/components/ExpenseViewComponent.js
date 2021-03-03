import React from "react";
import { Table, Button } from "reactstrap";

const ExpenseTable = (props) => {
  return (
      <h2>expense table goes here</h2>
    // <Table>
    //   <thead>
    //     <tr>
    //       <th>Expense Name</th>
    //       <th>Expense Category</th>
    //       <th>Expense Amount</th>
    //       <th>Action</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {props.expenses.length > 0 ? (
    //       props.expenses.map((income) => (
    //         <tr key={expense.id}>
    //           <td>{expense.name}</td>
    //           <td>{expense.category}</td>
    //           <td>{expense.amount}</td>
    //           <td>
    //             <Button
    //               onClick={() => {
    //                 props.editRow(expense);
    //               }}
    //             >
    //               Edit
    //             </Button>
    //             <Button onClick={() => props.deleteExpense(expense.id)}>
    //               Delete
    //             </Button>
    //           </td>
    //         </tr>
    //       ))
    //     ) : (
    //       <tr>
    //         <td>No Expense Added</td>
    //       </tr>
    //     )}
    //   </tbody>
    // </Table>
  );
};

export default ExpenseTable;
