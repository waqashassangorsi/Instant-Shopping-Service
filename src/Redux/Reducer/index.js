import {combineReducers} from 'redux';

//Import All Reducers
import {authReducer} from './Loginreducer';
// import {postReducer} from './post';
// import {appReducer} from './AppReducer';
import {Competitionreducer} from './Appreducer';
import {cartReducer} from './cart';
import {productsReducer} from './products';

export default combineReducers({
  auth: authReducer,
  competitionuser: Competitionreducer,
  cart: cartReducer,
  products: productsReducer,
});
