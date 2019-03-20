import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import CourseList from './course_list';
import { fetchCourses, fetchUserCourses } from '../actions';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.fetchCourses();

    if (this.props.authenticated) {
      this.props.fetchUserCourses();
    }
  }

   displayRightSide = () => {
     if (!this.props.authenticated) return <div />;
     return (
       <div className="user-courses-right-list">
         <Fade down> <h1>Your Courses</h1></Fade>
         {this.props.userCourses.length === 0 &&
         <Fade id="no-classes-added" up>
           <h2>You have not added any courses...</h2>
           <p>Courses you add will be displayed here!</p>
         </Fade>
         }
         <CourseList id="course-list" courses={this.props.userCourses} fade />
       </div>
     );
   }

   render() {
     return (
       <div className="whats-hot">
         <div className="whats-hot-left-list">
           <Fade down>
             <h1><span role="img" aria-label="Fire">🔥</span> Whats Hot <span role="img" aria-label="Fire">🔥</span></h1>
           </Fade>
           <CourseList id="course-list" courses={this.props.allCourses} showLearnMore fade />
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

export default withRouter(connect(mapStateToProps, { fetchCourses, fetchUserCourses })(Home));
