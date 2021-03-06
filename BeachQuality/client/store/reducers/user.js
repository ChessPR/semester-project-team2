import { userActionTypes } from "../actions/types";
const {
  REGISTER_USER,
  REGISTER_USER_FAILED,
  REGISTER_USER_SUCCESS
} = userActionTypes;

const initialState = {
  err: null,
  account: null,
  userLoading: false
};

const userReducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case REGISTER_USER: {
      return {
        ...state,
        userLoading: true
      };
    }

    case REGISTER_USER_SUCCESS: {
      return {
        ...state,
        err: null,
        userLoading: false
      };
    }

    case REGISTER_USER_FAILED: {
      return {
        ...state,
        userLoading: false,
        err: action.payload
      };
    }

    default:
      return state;
  }
};

export default userReducer;
