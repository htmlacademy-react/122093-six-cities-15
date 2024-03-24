import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import { AuthorizationStatus } from '../const';
import { Comment } from '../types/comment';
import { UserData } from '../types/user-data';

const getSelectedCity = createAction<City>('getSelectedCity');
const loadOffers = createAction<Offer[]>('data/loadOffers');
const getActiveOffer = createAction<Offer['id']>('getActiveCard');
const getFavoritesCount = createAction<number>('getFavoritesCount');
const loadOfferById = createAction<Offer>('data/loadOfferById');
const setDataLoadingStatus = createAction<boolean>('data/setDataLoadingStatus');
const loadNearOffersById = createAction<Offer[]>('loadNearOffersById');
const setAuthorizationStatus = createAction<AuthorizationStatus>('user/setAuthorizationStatus');
const loadCommentsById = createAction<Comment[]>('data/loadCommentsById');
const addNewComment = createAction<Comment>('data/addNewComment');
const getUserData = createAction<UserData>('data/getUserData');

export {
  loadOffers,
  loadOfferById,
  setDataLoadingStatus,
  loadNearOffersById,
  getSelectedCity,
  getActiveOffer,
  getFavoritesCount,
  setAuthorizationStatus,
  loadCommentsById,
  addNewComment,
  getUserData,
};
