import {HOME_ACTION_TYPES} from '../types';

const INITIAL_STATE = {
  loader: false,
};

export default home = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HOME_ACTION_TYPES.GETTING_DATA:
      return {
        ...state,
        loader: true,
      };
    default:
      return state;
  }
};
