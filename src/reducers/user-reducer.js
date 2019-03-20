import { ActionTypes } from '../actions';

const initialState = {};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USER:
      return (action.payload);
    default:
      return state;
  }
};

export default UserReducer;
