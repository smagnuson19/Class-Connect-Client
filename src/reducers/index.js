import { combineReducers } from 'redux';
import CourseReducer from './course-reducer';
import UserReducer from './user-reducer';
import AuthReducer from './auth-reducer';

const rootReducer = combineReducers({
  courses: CourseReducer,
  user: UserReducer,
  authenticated: AuthReducer,
});

export default rootReducer;
