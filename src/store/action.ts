import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';

const getOffersByCity = createAction<City>('getOffersByCity');
const getSortedOffers = createAction<Offer[]>('getSortedOffers');
const getActiveOffer = createAction<Offer['id']>('getActiveCard');
const getFavoritesCount = createAction<number>('getFavoritesCount');

export {getOffersByCity, getSortedOffers, getActiveOffer, getFavoritesCount};
