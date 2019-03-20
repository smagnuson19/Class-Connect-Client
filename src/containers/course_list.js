import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CourseListItem from './course_list_item';

class CourseList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {

  }

   displayList = () => {
     if (this.props.courses) {
       return this.props.courses.map((course) => {
         return (
           <CourseListItem key={`course-card-${course.id}-${this.props.key}`} course={course} showLearnMore={this.props.showLearnMore} fade={this.props.fade} />
         );
       });
     } else {
       return (
         <div>
           <p>Courses Loading... </p>
         </div>
       );
     }
   }

   render() {
     return (
       <div>
         {this.displayList()}
       </div>
     );
   }
}

const mapStateToProps = state => (
  {

  }
);

export default withRouter(connect(mapStateToProps, { })(CourseList));
