import { SET_USER, CLEAR_USER } from "../actions/types";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: true
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        currentUser: action.payload.currentUser,
        isLoading: false
      };
    case CLEAR_USER:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default userReducer;