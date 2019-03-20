import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { signupUser } from '../actions';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
  }

  render() {
    // preventing defualt on click of button found at:
    //  https://stackoverflow.com/questions/38256256/reactjs-page-refreshing-upon-onclick-handle-of-button
    return (
      <div className="sign-in-up-content-container">
        <h1>Sign Up!</h1>
        <form>
          <input className="first-name-input" placeholder="First Name..." onChange={(e) => { this.setState({ firstName: e.target.value }); }} value={this.state.firstName} />
          <input className="last-name-input" placeholder="Last Name..." onChange={(e) => { this.setState({ lastName: e.target.value }); }} value={this.state.lastName} />
          <input className="email-input" placeholder="E-Mail..." onChange={(e) => { this.setState({ email: e.target.value }); }} value={this.state.email} />
          <input className="password-input" placeholder="Password..." type="password" onChange={(e) => { this.setState({ password: e.target.value }); }} value={this.state.password} />
          <Button type="submit" variant="raised" color="primary" className="submit" onClick={(e) => { e.preventDefault(); this.props.signupUser(this.state, this.props.history); }}>Sign Up</Button>
        </form>
      </div>
    );
  }
}

export default withRouter(connect(null, { signupUser })(Signup));
