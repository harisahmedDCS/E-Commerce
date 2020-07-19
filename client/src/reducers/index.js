import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import card from './card';
import post from './post';
import shopcart from './shopcart';

export default combineReducers({
  alert,
  auth,
  card,
  post,
  shopcart,
});
