import axios from 'axios';
import { GET_CARD } from './types';

//Get current users profile
export const getCard = () => async (dispatch) => {
  const res = await axios.get('/api/v1/card/');
  dispatch({
    type: GET_CARD,
    payload: res.data,
  });
};
