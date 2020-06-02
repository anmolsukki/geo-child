import { combineReducers } from 'redux';
import { AuthReducer } from './Reducer/AuthReducer';
import { MagazineReducer } from './Reducer/MagazineReducer';
import { buyMagazineReducer } from './Reducer/PurchageReducer';

const rootReducer = combineReducers({
  CtrAuth: AuthReducer,
  CtrMagazine: MagazineReducer,
  CtrPurchage: buyMagazineReducer,
});

export default rootReducer;
