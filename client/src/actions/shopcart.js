import axios from 'axios';
import { setAlert } from './alert';
import { DELETE_CARD } from './types';
import { SHOP_CARD } from './types';

//Add cart
export const addshopCard = (id) => async (dispatch) => {
  const res = await axios.post(`/api/v1/shopcart/${id}`);
  dispatch({
    type: SHOP_CARD,
    payload: res.data,
  });
  dispatch(setAlert('ordered successfully', 'success'));
};
//deleteCard
// export const deleteCard = (id) => async (dispatch) => {
//   const res = await axios.delete(`/api/v1/shopcart/${id}`);
//   dispatch({
//     type: DELETE_CARD,
//     payload: res.data,
//   });
// };
