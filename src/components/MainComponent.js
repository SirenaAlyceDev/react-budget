import React, { Component } from "react";
import Home from './HomeComponent';
import BudgetStyle from './BudgetStyleChoiceComponent';
import Header from "./HeaderComponent";
import ListBudget from './SimpleListComponent';
import FTTBudget from './FTTBudgetComponent';
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  render() {
    const HomePage = () => {
      return (
        <Home />
      )
    }
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route path='/budgetstyle' component={BudgetStyle} />
          <Route path='/listbudget' component={ListBudget} />
          <Route path='/fttbudget' component={FTTBudget} />
          <Redirect to='/home' />
        </Switch>
      </div>
    );
  }
}

export default Main;
