import { ADD_CARD } from '../actions/types';

const initialState = {
  posts: [],
  post: null,
  loading: true,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_CARD:
      return {
        ...state,
        posts: payload,
        loading: false,
      };

    default:
      return state;
  }
}
