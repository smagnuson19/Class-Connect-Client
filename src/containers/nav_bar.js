import React from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import SearchBar from './search_bar';

import { signoutUser } from '../actions';

const renderAuthLinks = (props) => {
  if (props.authenticated) {
    return (
      <div id="auth-links">
        <Button component={NavLink} to="" onClick={() => { props.signoutUser(props.history); }} variant="flat" color="secondary">Sign Out</Button>
      </div>
    );
  } else {
    return (
      <div id="auth-links">
        <Button component={NavLink} to="/signup" variant="flat" color="primary">Sign Up</Button>
        <Button component={NavLink} to="/signin" variant="flat" color="primary">Sign In</Button>
      </div>
    );
  }
};

const renderWelcomeLink = (props) => {
  if (!props.authenticated) {
    return (<Button component={NavLink} to="/" variant="flat">Welcome</Button>);
  }
  return (<span />);
};

const NavBar = (props) => {
  return (
    <div className="navBarContainer">
      <nav>
        {renderWelcomeLink(props)}
        <Button component={NavLink} to="/home" variant="flat" >Home</Button>
        {props.authenticated &&
        <SearchBar />
        }
        {renderAuthLinks(props)}
      </nav>
    </div>
  );
};

const mapStateToProps = state => (
  {
    authenticated: state.authenticated.authenticated,
  }
);

export default withRouter(connect(mapStateToProps, { signoutUser })(NavBar));
