import { createSlice } from '@reduxjs/toolkit';
import { FavoriteStatus, RequestStatus } from '../../const';
import { Offer } from '../../types/offer';
import { changeFavoriteStatusAction, fetchFavoritesAction } from '../thunks/favorite';

type FavoriteState = {
  favorites: Offer[];
  status: RequestStatus;
}

const initialState: FavoriteState = {
  favorites: [],
  status: RequestStatus.Idle,
};

const favoritesSlice = createSlice({
  extraReducers: (builder) =>
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.status = RequestStatus.Success;
        state.favorites = action.payload;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(changeFavoriteStatusAction.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(changeFavoriteStatusAction.fulfilled, (state, action) => {
        state.status = RequestStatus.Success;
        switch (action.payload.status) {
          case FavoriteStatus.Added:
            state.favorites.push(action.payload.offer);
            break;
          case FavoriteStatus.Removed:
            state.favorites = state.favorites.filter((favorite) => favorite.id !== action.payload.offer.id);
            break;
        }
      })
      .addCase(changeFavoriteStatusAction.rejected, (state) => {
        state.status = RequestStatus.Failed;
      }),
  initialState,
  name: 'favorites',
  reducers: {},
  selectors: {
    favorites: (state) => state.favorites,
    favoritesStatus: (state) => state.status
  }
});

const favoritesActions = {...favoritesSlice.actions, fetchFavoritesAction, changeFavoriteStatusAction};
const favoritesSelectors = favoritesSlice.selectors;

export { favoritesActions, favoritesSlice, favoritesSelectors };
