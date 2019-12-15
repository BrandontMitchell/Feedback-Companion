import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from "./Header";
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
// BrowserRouter tells router how to change, Route used to setup rule between action and what will happen
// Browser only can have max one child component!


class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
