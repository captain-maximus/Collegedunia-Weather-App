import {HOME_ACTION_TYPES} from '../types';

const INITIAL_STATE = {
  loader: false,
  data: null,
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
    default:
      return state;
  }
};
