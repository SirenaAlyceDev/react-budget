import React, { Component } from "react";
import Home from './HomeComponent';
import BudgetStyle from './BudgetStyleChoiceComponent';
import Header from "./HeaderComponent";
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
          <Route path='/faqs' component={BudgetStyle} />
          <Route path='/budgetstyle' component={BudgetStyle} />
          <Redirect to='/home' />
        </Switch>
      </div>
    );
  }
}

export default Main;
