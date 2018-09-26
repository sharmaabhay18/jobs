import {
     FETCH_JOBS
} from '../action/types.js';

const initialState = {
   results: []
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case FETCH_JOBS:
      return actions.payload;
    default:
      return state;
  }
};
