import { GET_CARD } from '../actions/types';
const initialState = {
  cards: [],
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CARD:
      return {
        ...state,
        cards: payload,
        loading: false,
      };
    default:
      return state;
  }
}
