import { combineReducers } from 'redux';
import auth from './Authentication';
import jobs from './job_reducer';

export default combineReducers({
   auth, jobs
});
