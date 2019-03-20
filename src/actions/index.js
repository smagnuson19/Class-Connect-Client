import axios from 'axios';

const ROOT_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:9090/api' : 'https://class-connect.herokuapp.com/api';

// keys for actiontypes
export const ActionTypes = {
  FETCH_COURSES: 'FETCH_COURSES',
  FETCH_COURSE: 'FETCH_COURSE',
  FETCH_COURSE_SEARCH: 'FETCH_COURSE_SEARCH',

  FETCH_USER_COURSES: 'FETCH_USER_COURSES',
  ADD_USER_TO_COURSE: 'ADD_USER_TO_COURSE',
  DROP_USER_FROM_COURSE: 'DROP_USER_FROM_COURSE',

  FETCH_USER: 'FETCH_USER',

  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
  AUTH_USER: 'AUTH_USER',
};


export function fetchCourses() {
  return (dispatch) => {
    axios({
      method: 'get',
      url: `${ROOT_URL}/courses`,
    })
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_COURSES, payload: response.data });
      }).catch((error) => {
        console.log('error in fetchCourses() action creator async request');
      });
  };
}

export function fetchCourse(id) {
  return (dispatch) => {
    axios({
      method: 'get',
      url: `${ROOT_URL}/courses/${id}`,
    })
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_COURSE, payload: response.data });
      }).catch((error) => {
        console.log('error in fetchCourse() action creator async request');
      });
  };
}

export function fetchCourseSearch(query) {
  return (dispatch) => {
    axios({
      method: 'get',
      url: `${ROOT_URL}/courses/search/${query}`,
    })
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_COURSE_SEARCH, payload: response.data });
      }).catch((error) => {
        console.log('error in fetchCourseSearch() action creator async request');
      });
  };
}

// deletes token from localstorage
// and deauths
export function signoutUser(history) {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    history.push('/');
  };
}

export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

export function signinUser(params, history) {
  const { email } = params;
  const { password } = params;
  return (dispatch) => {
    axios({
      method: 'post',
      url: `${ROOT_URL}/signin`,
      data: { email, password },
    }).then((response) => {
      localStorage.setItem('token', response.data.token);
      dispatch({ type: ActionTypes.AUTH_USER });
      history.push('/home');
    }).catch((error) => {
      dispatch(authError(`Sign In Failed: ${error.response.data}`));
    });
  };
}


export function signupUser(params, history) {
  const { email } = params;
  const { password } = params;
  const { firstName } = params;
  const { lastName } = params;
  return (dispatch) => {
    axios({
      method: 'post',
      url: `${ROOT_URL}/signup`,
      data: {
        email, password, firstName, lastName,
      },
    }).then((response) => {
      localStorage.setItem('token', response.data.token);
      dispatch({ type: ActionTypes.AUTH_USER });
      history.push('/');
    }).catch((error) => {
      dispatch(authError(`Sign Up Failed: ${error.response.data}`));
    });
  };
}

export function fetchUserCourses() {
  return (dispatch) => {
    axios({
      method: 'get',
      url: `${ROOT_URL}/user/courses`,
      headers: { authorization: localStorage.getItem('token') },
    }).then((response) => {
      dispatch({ type: ActionTypes.FETCH_USER_COURSES, payload: response.data });
    }).catch((error) => {
      console.log('error fetching user courses');
    });
  };
}

export function addUserToCourse(courseID) {
  return (dispatch) => {
    axios({
      method: 'post',
      url: `${ROOT_URL}/user/courses`,
      data: { courseID },
      headers: { authorization: localStorage.getItem('token') },
    }).then((response) => {
      dispatch({ type: ActionTypes.ADD_USER_TO_COURSE, payload: response.data });
    }).catch((error) => {
      console.log('error adding course to user');
    });
  };
}

export function dropUserFromCourse(courseID) {
  return (dispatch) => {
    axios({
      method: 'delete',
      url: `${ROOT_URL}/user/courses`,
      data: { courseID },
      headers: { authorization: localStorage.getItem('token') },
    }).then((response) => {
      dispatch({ type: ActionTypes.DROP_USER_FROM_COURSE, payload: response.data });
    }).catch((error) => {
      console.log('error droping course to user');
    });
  };
}

export function fetchUser(id) {
  return (dispatch) => {
    axios({
      method: 'get',
      url: `${ROOT_URL}/users/${id}`,
    })
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_USER, payload: response.data });
      }).catch((error) => {
        console.log('error in fetchUser() action creator async request');
      });
  };
}
