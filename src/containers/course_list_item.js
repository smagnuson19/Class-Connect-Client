import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Fade from 'react-reveal/Fade';

import { addUserToCourse, dropUserFromCourse } from '../actions';

class CourseListItem extends Component {
  addCourse = () => {
    this.props.addUserToCourse(this.props.course.id);
  }

  dropCourse = () => {
    this.props.dropUserFromCourse(this.props.course.id);
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

  renderCourseCard = () => {
    return (
      <div className="course-list-item-card">
        <div className="card-course-content">
          <div className="card-course-score">
            <p>{this.props.course.score}</p>
          </div>
          <div className="card-course-info">
            <h1 id="course-title">{this.props.course.title}</h1>
            <div className="card-course-sub-info">
              <h1>{this.props.course.program} {this.props.course.number}</h1>
              <p id="instructor">{this.props.course.instructor}</p>
              <p id="period" >{this.props.course.period}</p>
            </div>
          </div>
        </div>
        <div className="card-course-actions">
          {this.props.showLearnMore &&
            <Button component={NavLink} to={`/courses/${this.props.course.id}`} size="small" color="primary">
                Learn More
            </Button>
          }
          {this.renderAddDrop()}
        </div>
      </div>
    );
  }

  render() {
    if (this.props.fade) {
      return (
        <Fade up>
          {this.renderCourseCard()}
        </Fade>
      );
    }

    return (
      <div>
        {this.renderCourseCard()}
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    userCourses: state.courses.userCourses,
    authenticated: state.authenticated.authenticated,
  }
);

export default withRouter(connect(mapStateToProps, { addUserToCourse, dropUserFromCourse })(CourseListItem));
