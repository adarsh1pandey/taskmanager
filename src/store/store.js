import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {api} from '../services/api';
// import userSlice from './feature/userSlice';
import persistReducer from 'redux-persist/es/persistReducer';
import {setupListeners} from '@reduxjs/toolkit/dist/query';
import persistStore from 'redux-persist/es/persistStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from 'redux-persist';
import taskSlice from './Slices/TaskSlice';

const reducers = combineReducers({
  // userSlice: userSlice.reducer,
  taskSlice: taskSlice.reducer,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['taskSlice'],
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware);
    return middlewares;
  },
});

const persistor = persistStore(store);
setupListeners(store.dispatch);
export {store, persistor};
