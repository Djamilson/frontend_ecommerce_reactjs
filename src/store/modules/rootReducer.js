import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import horario from './horario/reducer';
// import token from './token/reducer';
import cart from './cart/reducer';

export default combineReducers({
  auth,
  user,
  horario,
  cart,
});
