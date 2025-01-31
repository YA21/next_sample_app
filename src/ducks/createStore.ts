import { Store, combineReducers } from 'redux';
import logger from 'redux-logger';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import investAmountSlice, { initialState as investAmountState } from './investAmount/slice';

const rootReducer = combineReducers({
  investAmount: investAmountSlice.reducer,
});

const preloadedState = () => {
  return { investAmount: investAmountState };
};

export type StoreState = ReturnType<typeof preloadedState>;

export type ReduxStore = Store<StoreState>;

const createStore = () => {
  // const middlewareList = [...getDefaultMiddleware(), logger];
  const middlewareList = [...getDefaultMiddleware()];

  return configureStore({
    reducer: rootReducer,
    middleware: middlewareList,
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: preloadedState(),
  });
};

export default createStore;