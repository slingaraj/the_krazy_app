import {configureStore,combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'reduxjs-toolkit-persist';
import cartSlice from '../Reducers/cartSlice';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['cart'],
};
const rootReducer = combineReducers({
  cart:cartSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export default configureStore({
  reducer: persistedReducer,
});

