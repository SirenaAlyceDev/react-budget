import React, { Component } from "react";
import ListExpense from "./ListBudgetExpenseComponent";
import ListIncome from "./ListBudgetIncomeComponent";
import ListRemaining from "./ListBudgetLeftOver";

class ListBudget extends Component {
  render() {
    return (
      <div>
        <ListIncome />
        <ListExpense />
        <ListRemaining />
      </div>
    );
  }
}

export default ListBudget;
