import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CourseList from './course_list';
import { fetchCourses, fetchUserCourses, fetchCourseSearch } from '../actions';

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    // this.props.fetchCourses();

    if (this.props.authenticated) {
      this.props.fetchUserCourses();
    }
  }

     displayRightSide = () => {
       if (!this.props.authenticated) return <div />;
       return (
         <div className="user-courses-right-list">
           <h1>Your Courses</h1>
           <CourseList id="course-list" courses={this.props.userCourses} />
         </div>
       );
     }

     render() {
       return (
         <div className="whats-hot">
           <div className="whats-hot-left-list">
             <h1>Search Results:</h1>
             <CourseList id="course-list" courses={this.props.allCourses} showLearnMore />
           </div>
           {this.displayRightSide()}
         </div>
       );
     }
}

const mapStateToProps = state => (
  {
    userCourses: state.courses.userCourses,
    allCourses: state.courses.allCourses,
    authenticated: state.authenticated.authenticated,
  }
);

export default withRouter(connect(mapStateToProps, { fetchCourses, fetchUserCourses, fetchCourseSearch })(SearchResults));
