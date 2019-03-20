import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { NavLink, withRouter } from 'react-router-dom';

import { addUserToCourse, dropUserFromCourse, fetchCourse, fetchUserCourses } from '../actions/index';


class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.fetchCourse(this.props.match.params.courseID);

    if (this.props.authenticated) {
      this.props.fetchUserCourses();
    }
  }

  addCourse = () => {
    this.props.addUserToCourse(this.props.course.id);
  }

  dropCourse = () => {
    this.props.dropUserFromCourse(this.props.course.id);
  }


  displayStudents = () => {
    if (this.props.course && this.props.course.students) {
      if (this.props.course.students.length === 0) {
        return (
          <div>
            <p>No students currently enrolled</p>
          </div>
        );
      }
      return this.props.course.students.map((student) => {
        return (
          <div key={student.id} id="user-list">
            <Button
              component={NavLink}
              to={`/users/${student.id}`}
              size="small"
              color="primary"
            >
              {student.fullName}
            </Button>
          </div>
        );
      });
    } else {
      return (
        <div>
          <p>Students Loading...</p>
        </div>
      );
    }
  }

  renderAddDrop = () => {
    if (!this.props.authenticated) return <div />;

    let alreadyAdded = false;
    this.props.userCourses.forEach((course) => {
      if (course.id === this.props.course.id) {
        alreadyAdded = true;
      }
    });

    return (
      <Button
        id="card-add-course"
        size="small"
        variant="raised"
        color={alreadyAdded ? 'secondary' : 'primary'}
        disabled={this.props.userCourses.length >= 4 && !alreadyAdded}
        onClick={() => (alreadyAdded ? this.dropCourse() : this.addCourse())}
      >
        <p>{alreadyAdded ? 'Drop' : 'Add'}</p>
      </Button>
    );
  }

  render() {
    if (this.props.course === undefined) {
      return (
        <div>Loading...</div>
      );
    } else {
      return (
        <div className="course-item">
          <p id="course-score"> <p>{this.props.course.score}</p> </p>
          <div className="course-item-header">
            <div className="course-item-headline">
              <h1 id="course-title">{this.props.course.title}</h1>
            </div>
            <div className="course-item-subheadline">
              <h2 id="course-info">{this.props.course.program} {this.props.course.number}</h2>
              <h2>Period: {this.props.course.period}</h2>
            </div>
          </div>
          <div className="course-main">
            <div className="course-main-heading">
              <h3 className="course-main-sub"> Taught by: {this.props.course.instructor}</h3>
              <h3 className="course-main-sub">World Culture: {this.props.course.world_culture}</h3>
              <h3 className="course-main-sub">Distributive: {this.props.course.distribs}</h3>
              <div>{this.renderAddDrop()}</div>
            </div>
            <div className="course-text">
              <h4> Description: </h4>
              <p>{this.props.course.description}</p>
              <div className="course-students">
                <h4>Students Enrolled: </h4>
                {this.displayStudents()}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}


// connects particular parts of redux state to this components props
const mapStateToProps = state => (
  {
    course: state.courses.course,
    userCourses: state.courses.userCourses,
    authenticated: state.authenticated.authenticated,
  }
);


// react-redux glue -- outputs Container that knows how to call actions
// new way to connect with react router 4
export default withRouter(connect(mapStateToProps, {
  addUserToCourse, dropUserFromCourse, fetchCourse, fetchUserCourses,
})(Course));
