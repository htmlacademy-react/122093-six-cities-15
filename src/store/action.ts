import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';

const getOffersByCity = createAction<City>('getOffersByCity');
const getSortedOffers = createAction<Offer[]>('getSortedOffers');
const getActiveOffer = createAction<Offer['id']>('getActiveCard');

export {getOffersByCity, getSortedOffers, getActiveOffer};
