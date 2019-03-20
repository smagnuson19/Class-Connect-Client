import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CourseList from './course_list';

import { fetchUser, fetchUserCourses } from '../actions/index';


class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.fetchUser(this.props.match.params.userID);

    if (this.props.authenticated) {
      this.props.fetchUserCourses();
    }
  }

  render() {
    if (this.props.user === undefined) {
      return (
        <div>Loading...</div>
      );
    } else {
      return (
        <div className="user-container">
          <h1 id="user-title">{this.props.user.fullName}</h1>
          <h2>Courses:</h2>
          <CourseList courses={this.props.user.courses} showLearnMore />
        </div>
      );
    }
  }
}


// connects particular parts of redux state to this components props
const mapStateToProps = state => (
  {
    user: state.user,
  }
);


// react-redux glue -- outputs Container that knows how to call actions
// new way to connect with react router 4
export default withRouter(connect(mapStateToProps, { fetchUser, fetchUserCourses })(User));
