import { ActionTypes } from '../actions';

const initialState = {
  allCourses: [],
  userCourses: [],
  course: {},
};

const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_COURSES:
      return { ...state, allCourses: action.payload };
    case ActionTypes.FETCH_COURSE:
      return { ...state, course: action.payload };
    case ActionTypes.FETCH_COURSE_SEARCH:
      return { ...state, allCourses: action.payload };
    case ActionTypes.FETCH_USER_COURSES:
      return { ...state, userCourses: action.payload };
    case ActionTypes.ADD_USER_TO_COURSE:
      return { ...state, userCourses: action.payload };
    case ActionTypes.DROP_USER_FROM_COURSE:
      return { ...state, userCourses: action.payload };
    default:
      return state;
  }
};

export default CourseReducer;
