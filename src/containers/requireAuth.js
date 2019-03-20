import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class RequireAuth extends Component {
    constructor(props) {
      super(props);

      this.state = {};

      this.dev_mode = process.env.NODE_ENV === 'development';
    }

    componentWillMount() {
      if (!this.props.authenticated && !this.dev_mode) {
        this.props.history.push('/signin');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated && !this.dev_mode) {
        this.props.history.push('/signin');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => (
    {
      authenticated: state.authenticated.authenticated,
    }
  );

  return connect(mapStateToProps, null)(RequireAuth);
}
