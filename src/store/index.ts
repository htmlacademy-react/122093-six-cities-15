import { Reducer, combineReducers, configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { offerDetailSlice } from './slices/offer-detail';
import { offersSlice } from './slices/offers';
import { commentsSlice } from './slices/comments';
import { authSlice } from './slices/auth';

const reducer: Reducer = combineReducers({
  [offerDetailSlice.name]: offerDetailSlice.reducer,
  [offersSlice.name]: offersSlice.reducer,
  [commentsSlice.name]: commentsSlice.reducer,
  [authSlice.name]: authSlice.reducer
});

export const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      }
    })
});
