import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Welcome from '../containers/welcome';
import Home from '../containers/home';
import Course from '../containers/course';

import SearchResults from '../containers/search_results';
import User from '../containers/user';

import Signin from '../containers/sign_in';
import Signup from '../containers/sign_up';
import requireAuth from '../containers/requireAuth';

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/search/:query" component={requireAuth(SearchResults)} />
      <Route exact path="/courses/:courseID" component={requireAuth(Course)} />
      <Route exact path="/users/:userID" component={requireAuth(User)} />
      <Route component={Welcome} />
    </Switch>
  );
};

export default Routes;
