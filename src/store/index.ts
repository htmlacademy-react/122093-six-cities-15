import { Reducer, combineReducers, configureStore } from '@reduxjs/toolkit';
import { offerDetailSlice } from './slices/offer-detail';
import { offersSlice } from './slices/offers';
import { commentsSlice } from './slices/comments';
import { authSlice } from './slices/auth';
import { favoritesSlice } from './slices/favorite';
import { createAPI } from '@services/api';

const rootReducer: Reducer = combineReducers({
  [offerDetailSlice.name]: offerDetailSlice.reducer,
  [offersSlice.name]: offersSlice.reducer,
  [commentsSlice.name]: commentsSlice.reducer,
  [authSlice.name]: authSlice.reducer,
  [favoritesSlice.name]: favoritesSlice.reducer
});

export const api = createAPI();

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: api,
        }
      })
  });
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
