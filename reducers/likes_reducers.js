import _ from 'lodash';
import { REHYDRATE } from 'redux-persist';
import {
     LIKE_JOB,
     CLEAR_LIKED_JOB
} from '../action/types.js';

export default (state = [], actions) => {
  switch (actions.type) {
    case REHYDRATE:
     return actions.payload.likedJobs || [];
    case CLEAR_LIKED_JOB:
      return [];
    case LIKE_JOB:
      return _.uniqBy([actions.payload, ...state], 'id');
    default:
      return state;
  }
};
