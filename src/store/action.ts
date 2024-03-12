import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/city';

const getOffersByCity = createAction<City>('getOffersByCity');

export {getOffersByCity};
