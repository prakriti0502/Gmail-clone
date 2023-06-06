// actions/dataActions.js

import axios from 'axios';
import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './types';

export const fetchData = () => async (dispatch) => {
  try {
    const response = await axios.get('https://run.mocky.io/v3/15a3a1c3-1cda-4409-b1b1-2f39f5f25123');
    dispatch({
      type: FETCH_DATA_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_DATA_FAILURE,
      payload: error.message,
    });
  }
};