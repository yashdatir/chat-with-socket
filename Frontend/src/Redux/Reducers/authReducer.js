import {
  INITIAL_STATE,
  ADD_NAME,
  ADD_MESSAGE,
  MANAGE_MESSAGE,
} from '../ReduxConstants';

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NAME: {
      return {
        ...state,
        name: action.value,
      };
    }
    case ADD_MESSAGE: {
      return {
        ...state,
        message: action.value,
      };
    }
    case MANAGE_MESSAGE: {
      return {
        ...state,
        msg: action.value,
      };
    }
    default: {
      return { ...state };
    }
  }
};
