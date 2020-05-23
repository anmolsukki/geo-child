import { combineReducers } from 'redux';
import { AuthReducer } from './Reducer/AuthReducer';
import { MagazineReducer } from './Reducer/MagazineReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  CtrSignUp: AuthReducer,
  CtrMagazine: MagazineReducer,
});

export default persistReducer(persistConfig, rootReducer);
