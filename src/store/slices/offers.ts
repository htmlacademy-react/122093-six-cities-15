import { DEFAULT_CITY, RequestStatus } from '@const';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchOffersAction } from '@store/thunks/offers';
import { City } from '@type/city';
import { Offer } from '@type/offer';

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
    },
    updateOffers: (state, action: PayloadAction<Offer['id']>) => {
      state.offers = state.offers.map((offer) => offer.id === action.payload ? {...offer, isFavorite: !offer.isFavorite} : offer);
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
