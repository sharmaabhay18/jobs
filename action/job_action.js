import axios from 'axios';
import reverseGeocode  from 'latlng-to-zip';
import qs from 'qs';

import {
     FETCH_JOBS,
    LAT_LNG_USING_ADDRESS,
    LIKE_JOB,
    CLEAR_LIKED_JOB
} from './types.js';

//const JOB_ROOT_URl = 'http://api.indeed.com/ads/apisearch?';
const JOB_ROOT_URl = 'https://jobs.github.com/positions.json?';


// const JOB_QUERY_PARAMS = {
//   publisher: '4201738803816157',
//   format: 'json',
//   v: '2',
//   latlng: 1,
//   radius: 10,
//   q: 'javascript'
// };

const buildJobURL = (region) => {
  const query = qs.stringify({ description: 'java', lat: region.latitude, long: region.longitude });
  return `${JOB_ROOT_URl}${query}`;
};

export const fetchJobs = (region, callback) => async dispatch => {
  try {
    //let zip = await reverseGeocode(region);
    const url = buildJobURL(region);
    const { data } = await axios.get(url);
    dispatch({ type: FETCH_JOBS, payload: data });
    callback();
  } catch (e) {
    console.error(e);
  }
};

export const likeJob = (job) => {
  return {
    type: LIKE_JOB,
    payload: job
  };
};

export const clearLikedJob = () => {
  return {
    type: CLEAR_LIKED_JOB
  };
};
