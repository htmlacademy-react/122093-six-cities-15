import { RequestStatus } from '@const';
import { makeFakeOffer } from '@utils/mocks';
import { offerDetailSlice } from './offer-detail';
import { fetchNearOffersByIdAction, fetchOfferByIdAction } from '@store/thunks/offers';

describe('Offer Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = { offerDetail: null, status: RequestStatus.Idle, nearOffers: []};

    const result = offerDetailSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = { offerDetail: null, status: RequestStatus.Idle, nearOffers: []};

    const result = offerDetailSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "Loading" with "fetchOfferByIdAction.pending" action', () => {
    const initialState = { offerDetail: null, status: RequestStatus.Idle, nearOffers: []};
    const expectedState = { offerDetail: null, status: RequestStatus.Loading, nearOffers: []};

    const result = offerDetailSlice.reducer(initialState, fetchOfferByIdAction.pending('offerId', ''));

    expect(result).toEqual(expectedState);
  });

  it('should set "Success" with "fetchOfferByIdAction.fulfilled" action', () => {
    const offerDetail = makeFakeOffer();
    const initialState = { offerDetail: null, status: RequestStatus.Idle, nearOffers: []};
    const expectedState = { offerDetail, status: RequestStatus.Success, nearOffers: []};

    const result = offerDetailSlice.reducer(initialState, fetchOfferByIdAction.fulfilled(offerDetail, 'offerId', ''));

    expect(result).toEqual(expectedState);
  });

  it('should set "Failed" with "fetchOfferByIdAction.rejected" action', () => {
    const initialState = { offerDetail: null, status: RequestStatus.Idle, nearOffers: []};
    const expectedState = { offerDetail: null, status: RequestStatus.Failed, nearOffers: []};

    const result = offerDetailSlice.reducer(initialState, fetchOfferByIdAction.rejected(null, 'offerId', ''));

    expect(result).toEqual(expectedState);
  });

  it('should set "Success" with "fetchNearByOffersAction.fullfilled" action', () => {
    const nearOffers = [makeFakeOffer()];
    const initialState = { offerDetail: null, status: RequestStatus.Idle, nearOffers: []};
    const expectedState = { offerDetail: null, status: RequestStatus.Idle, nearOffers: nearOffers};

    const result = offerDetailSlice.reducer(initialState, fetchNearOffersByIdAction.fulfilled(nearOffers, 'offerId', ''));

    expect(result).toEqual(expectedState);
  });
});
