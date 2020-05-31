import { combineReducers } from 'redux';
import { AuthReducer } from './Reducer/AuthReducer';
import { MagazineReducer } from './Reducer/MagazineReducer';

const rootReducer = combineReducers({
  CtrAuth: AuthReducer,
  CtrMagazine: MagazineReducer,
});

export default rootReducer;
