import { SET_CURRENT_CHANNEL, SET_PRIVATE_CHANNEL, SET_USER_POSTS } from "../actions/types";

const INITIAL_STATE = {
  currentChannel: null,
  isPrivateChannel: false
};


const channelReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_CHANNEL:
      return {
        ...state,
        currentChannel: action.payload.currentChannel
      }
      case SET_PRIVATE_CHANNEL:
      return {
        ...state,
        isPrivateChannel: action.payload.isPrivateChannel
      };

      case SET_USER_POSTS:
      return {
        ...state,
        userPosts: action.payload.userPosts
      };
    default:
      return state;
  }
}

export default channelReducer;