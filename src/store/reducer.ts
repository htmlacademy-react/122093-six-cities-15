import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, DEFAULT_CITY } from '../const';
import { addNewComment, getActiveOffer, getFavoritesCount, getSelectedCity, getUserData, loadCommentsById, loadNearOffersById, loadOfferById, loadOffers, setAuthorizationStatus, setDataLoadingStatus } from './action';
import offers from '../mocks/offers';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { Comment } from '../types/comment';
import { UserData } from '../types/user-data';

type InitialState = {
  city: City;
  offers: Offer[];
  activeOffer: Offer['id'];
  favoritesCount: number;
  offerDetail: Offer | null;
  nearOffers: Offer[];
  isDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  comments: Comment[];
  userData: UserData;
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  activeOffer: '',
  favoritesCount: offers.filter((offer) => offer.isFavorite).length,
  offerDetail: null,
  nearOffers: [],
  isDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  comments: [],
  userData: <UserData>{},
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getSelectedCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(loadOfferById, (state, action) => {
      state.offerDetail = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(loadNearOffersById, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(getActiveOffer, (state, action) => {
      state.activeOffer = action.payload;
    })
    .addCase(getFavoritesCount, (state, action) => {
      state.favoritesCount = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadCommentsById, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(addNewComment, (state, action) => {
      state.comments = [action.payload, ...state.comments];
    })
    .addCase(getUserData, (state, action) => {
      state.userData = action.payload;
    });
});

export {reducer};
