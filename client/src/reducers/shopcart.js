import { SHOP_CARD } from '../actions/types';

const initialState = {
  shops: [],
  shop: null,
  loading: true,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SHOP_CARD:
      return {
        ...state,
        shops: payload,
        loading: false,
      };
    default:
      return state;
  }
}
