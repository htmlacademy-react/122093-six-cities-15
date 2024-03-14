import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY } from '../const';
import { getActiveOffer, getOffersByCity, getSortedOffers } from './action';
import offers from '../mocks/offers';

const initialState = {
  city: DEFAULT_CITY,
  offers,
  sortedOffers: offers.filter((offer) => offer.city.name === DEFAULT_CITY.name),
  activeOffer: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getOffersByCity, (state, action) => {
      state.city = action.payload;
      state.offers = offers.filter((offer) => offer.city.name === action.payload.name);
      state.sortedOffers = offers.filter((offer) => offer.city.name === action.payload.name);
    })
    .addCase(getSortedOffers, (state, action) => {
      state.sortedOffers = action.payload;
    })
    .addCase(getActiveOffer, (state, action) => {
      state.activeOffer = action.payload;
    });
});

export {reducer};
