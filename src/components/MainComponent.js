import React, { Component } from "react";
import Home from './HomeComponent';
import BudgetStyle from './BudgetStyleChoiceComponent';
import Header from "./HeaderComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import ListBudget from './SimpleListComponent';

class Main extends Component {
  render() {
    const HomePage = () => {
      return (
        <Home />
      )
    }
    return (
      <div>
        <ListBudget />
        {/* <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route path='/budgetstyle' component={BudgetStyle} />
          <Route path='/faqs' component={ListBudget} />
          <Redirect to='/home' />
        </Switch> */}
      </div>
    );
  }
}

export default Main;
