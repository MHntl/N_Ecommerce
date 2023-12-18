import {combineReducers} from 'redux';
import homeReducer from './homeReducer';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import productReducer from './productReducer';

//home=> uygulama hangi sayfadaysa o verileri okumamizi saglar. Home sayfasindaysa home un verilerini okumamizi saglar
const rootReducer = combineReducers({
  home: homeReducer,
  auth: authReducer,
  profile: profileReducer,
  product: productReducer,
});

export default rootReducer;
