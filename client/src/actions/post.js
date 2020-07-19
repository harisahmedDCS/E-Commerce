import axios from 'axios';

import { ADD_CARD } from './types';
import { DELETE_CARD } from './types';
//Add cart
export const addCard = (id) => async (dispatch) => {
  const res = await axios.get(`/api/v1/card/${id}`);
  dispatch({
    type: ADD_CARD,
    payload: res.data,
  });
};
