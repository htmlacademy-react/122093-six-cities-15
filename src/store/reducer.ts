import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY } from '../const';
import { getOffersByCity } from './action';
import offers from '../mocks/offers';

const initialState = {
  city: DEFAULT_CITY,
  offers
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getOffersByCity, (state, action) => {
      state.city = action.payload;
      state.offers = offers.filter((offer) => offer.city.name === action.payload.name);
    });
});

export {reducer};
