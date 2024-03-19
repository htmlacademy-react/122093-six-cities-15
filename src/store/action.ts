import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { AuthorizationStatus } from '../const';

const getSelectedCity = createAction<City>('getSelectedCity');
const loadOffers = createAction<Offer[]>('data/loadOffers');
const getSortedOffers = createAction<Offer[]>('getSortedOffers');
const getActiveOffer = createAction<Offer['id']>('getActiveCard');
const getFavoritesCount = createAction<number>('getFavoritesCount');
const loadOfferById = createAction<Offer>('data/loadOfferById');
const setActualOfferLoadingStatus = createAction<boolean>('data/setActualOfferLoadingStatus');
const loadNearOffersById = createAction<Offer[]>('loadNearOffersById');
const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');

export {
  loadOffers,
  loadOfferById,
  setActualOfferLoadingStatus,
  loadNearOffersById,
  getSelectedCity,
  getSortedOffers,
  getActiveOffer,
  getFavoritesCount,
  setAuthorizationStatus,
};
