import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, DEFAULT_CITY } from '../const';
import { getActiveOffer, getFavoritesCount, getSelectedCity, getSortedOffers, loadNearOffersById, loadOfferById, loadOffers, setActualOfferLoadingStatus, setAuthorizationStatus } from './action';
import offers from '../mocks/offers';
import { City } from '../types/city';
import { Offer } from '../types/offer';

type InitialState = {
  city: City;
  offers: Offer[];
  sortedOffers: Offer[];
  activeOffer: Offer['id'];
  favoritesCount: number;
  offerDetail: Offer;
  nearOffers: Offer[];
  isDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
};

const initialState: InitialState = {
  city: DEFAULT_CITY,
  offers: [],
  sortedOffers: [],
  activeOffer: '',
  favoritesCount: offers.filter((offer) => offer.isFavorite).length,
  offerDetail: <Offer>{},
  nearOffers: [],
  isDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getSelectedCity, (state, action) => {
      state.city = action.payload;
      state.sortedOffers = state.offers.filter((offer) => offer.city.name === state.city.name);
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.sortedOffers = action.payload.filter((offer) => offer.city.name === state.city.name);
    })
    .addCase(loadOfferById, (state, action) => {
      state.offerDetail = action.payload;
    })
    .addCase(setActualOfferLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(loadNearOffersById, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(getSortedOffers, (state, action) => {
      state.sortedOffers = action.payload;
    })
    .addCase(getActiveOffer, (state, action) => {
      state.activeOffer = action.payload;
    })
    .addCase(getFavoritesCount, (state, action) => {
      state.favoritesCount = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
