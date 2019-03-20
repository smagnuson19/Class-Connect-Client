import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import { fetchCourses } from '../actions';
import CourseList from './course_list';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    if (this.props.authenticated) {
      this.props.history.push('/home');
    }
    this.props.fetchCourses();
  }

  render() {
    return (
      <div className="welcomePage">
        <div id="welcome-bg" />
        <div className="welcome-content">
          <div className="welcomeCourseList">
            <Fade down>
              <h1><span role="img" aria-label="Fire">🔥</span> Whats Hot <span role="img" aria-label="Fire">🔥</span></h1>
            </Fade>
            <CourseList fade showLearnMore courses={this.props.allCourses.slice(0, 3)} />
          </div>
          <div className="welcome-page-content">
            <Fade down>
              <h1>ClassConnect</h1>
              <p>Come see what classes your friends are taking next term and find out what the most popular classes are...</p>
            </Fade>
            <Fade up >
              <div id="sign-in-sign-up-buttons">
                <Button component={NavLink} to="/signup" variant="raised" color="primary">Sign Up</Button>
                <Button component={NavLink} to="/signin" variant="raised" color="primary">Sign In</Button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    allCourses: state.courses.allCourses,
    authenticated: state.authenticated.authenticated,
  }
);

export default withRouter(connect(mapStateToProps, { fetchCourses })(Welcome));
