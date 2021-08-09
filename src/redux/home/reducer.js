import {HOME_ACTION_TYPES} from '../types';

const INITIAL_STATE = {
  loader: false,
  data: null,
  error: false,
};

export default home = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HOME_ACTION_TYPES.GETTING_DATA:
      return {
        ...state,
        loader: true,
      };
    case HOME_ACTION_TYPES.GETTING_DATA_SUCCESS:
      return {
        ...state,
        loader: false,
        data: action.payload,
      };
    case HOME_ACTION_TYPES.ERROR_OCCURRED:
      return {
        ...state,
        loader: false,
        data: null,
        error: true,
      };
    default:
      return state;
  }
};
