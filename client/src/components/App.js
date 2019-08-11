import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
const Dashboard = () => <h1>Dashboard</h1>;

const SurveryNew = () => <h1>SurveyNew</h1>;

const App = props => {
  useEffect(() => {
    props.fetchUser();
  });
  return (
    <div className='container'>
      <Router>
        <div>
          <Header />
          <Route exact path='/' component={Landing} />
          <Route exact path='/surveys' component={Dashboard} />
          <Route path='/surveys/new' component={SurveryNew} />
        </div>
      </Router>
    </div>
  );
};

export default connect(
  null,
  actions
)(App);
