import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['IncrementDecrementReducer'],
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);

export {store, persistor};
