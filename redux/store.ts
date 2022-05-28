import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { apiReducer } from './reducers/api.reducer';
import { authReducer } from './reducers/auth.reducer';
import { userReducer } from './reducers/user.reducer';
import { locationsSlice } from './slices/locations.slice';
import { productsSlice } from './slices/products.slice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { categoriesSlice } from './slices/categories.slice';
import { alertsSlice } from './slices/alerts.slice';
import { userProductsSlice } from './slices/user-products.slice';

export const reducer = combineReducers({
  api: apiReducer,
  user: userReducer,
  auth: authReducer,
  alerts: alertsSlice.reducer,
  products: productsSlice.reducer,
  locations: locationsSlice.reducer,
  categories: categoriesSlice.reducer,
  userProducts: userProductsSlice.reducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['auth', 'user'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
