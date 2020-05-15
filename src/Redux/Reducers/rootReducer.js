import { combineReducers } from 'redux';
import { AuthReducer } from './Reducer/AuthReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['CtrSignUp'],
};

const rootReducer = combineReducers({
  CtrSignUp: AuthReducer,
});

export default persistReducer(persistConfig, rootReducer);
