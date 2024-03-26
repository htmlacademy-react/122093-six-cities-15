import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer';
import { DEFAULT_CITY, RequestStatus } from '../../const';
import { City } from '../../types/city';
import { fetchOffersAction } from '../thunks/offers';

type OffersState = {
  city: City;
  offers: Offer[];
  status: RequestStatus;
  activeOfferId: Offer['id'];
}

const initialState: OffersState = {
  city: DEFAULT_CITY,
  offers: [],
  status: RequestStatus.Idle,
  activeOfferId: '',
};

const offersSlice = createSlice({
  extraReducers: (builder) =>
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.status = RequestStatus.Success;
        state.offers = action.payload;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.status = RequestStatus.Failed;
      }),
  initialState,
  name: 'offers',
  reducers: {
    setLocation: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    },
    setActiveOfferId: (state, action: PayloadAction<Offer['id']>) => {
      state.activeOfferId = action.payload;
    }
  },
  selectors: {
    city: (state: OffersState) => state.city,
    offers: (state: OffersState) => state.offers,
    offersStatus: (state: OffersState) => state.status,
    activeOfferId: (state: OffersState) => state.activeOfferId,
  }
});

const offersActions = {...offersSlice.actions, fetchOffersAction};
const offersSelectors = offersSlice.selectors;

export { offersActions, offersSlice, offersSelectors };
