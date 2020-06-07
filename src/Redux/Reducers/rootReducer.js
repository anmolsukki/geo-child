import { combineReducers } from 'redux';
import { AuthReducer } from './Reducer/AuthReducer';
import { MagazineReducer } from './Reducer/MagazineReducer';
import { buyMagazineReducer } from './Reducer/PurchageReducer';
import { contactReducer } from './Reducer/ContactReducer';
import { teamReducer } from './Reducer/TeamReducer';

const rootReducer = combineReducers({
  CtrAuth: AuthReducer,
  CtrMagazine: MagazineReducer,
  CtrPurchage: buyMagazineReducer,
  CtrContact: contactReducer,
  CtrTeam: teamReducer,
});

export default rootReducer;
