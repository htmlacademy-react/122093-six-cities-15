import { createSlice } from '@reduxjs/toolkit';
import { RequestStatus } from '../../const';
import { Offer } from '../../types/offer';
import { fetchNearOffersByIdAction, fetchOfferByIdAction } from '../thunks/offers';

type OfferDetailState = {
  offerDetail: Offer | null;
  status: RequestStatus;
  nearOffers: Offer[];
}

const initialState: OfferDetailState = {
  offerDetail: null,
  status: RequestStatus.Idle,
  nearOffers: [],
};

const offerDetailSlice = createSlice({
  extraReducers: (builder) =>
    builder
      .addCase(fetchOfferByIdAction.pending, (state) => {
        state.status = RequestStatus.Loading;
      })
      .addCase(fetchOfferByIdAction.fulfilled, (state, action) => {
        state.status = RequestStatus.Success;
        state.offerDetail = action.payload;
      })
      .addCase(fetchOfferByIdAction.rejected, (state) => {
        state.status = RequestStatus.Failed;
      })
      .addCase(fetchNearOffersByIdAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
      }),
  initialState,
  name: 'offerDetail',
  reducers: {
    clear(state) {
      state.offerDetail = null;
      state.nearOffers = [];
    }
  },
  selectors: {
    offerDetail: (state) => state.offerDetail,
    offerDetailStatus: (state) => state.status,
    nearOffers: (state) => state.nearOffers,
  }
});

const offerDetailActions = {...offerDetailSlice.actions, fetchOfferByIdAction, fetchNearOffersByIdAction};
const offerDetailSelectors = offerDetailSlice.selectors;

export { offerDetailActions, offerDetailSlice, offerDetailSelectors };
