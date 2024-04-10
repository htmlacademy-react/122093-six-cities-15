import { CITIES, DEFAULT_CITY, RequestStatus } from '@const';
import { offersSlice } from './offers';
import { fetchOffersAction } from '@store/thunks/offers';
import { makeFakeOffer } from '@utils/mocks';

describe('Offers Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = { city: DEFAULT_CITY, offers: [], status: RequestStatus.Idle, activeOfferId: '' };

    const result = offersSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = { city: DEFAULT_CITY, offers: [], status: RequestStatus.Idle, activeOfferId: '' };

    const result = offersSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "Loading" with "fetchOffersAction.pending" action', () => {
    const initialState = { city: DEFAULT_CITY, offers: [], status: RequestStatus.Idle, activeOfferId: '' };
    const expectedState = { city: DEFAULT_CITY, offers: [], status: RequestStatus.Loading, activeOfferId: '' };

    const result = offersSlice.reducer(initialState, fetchOffersAction.pending('', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "Success" with "fetchOffersAction.fulfilled" action', () => {
    const offers = [makeFakeOffer()];
    const initialState = { city: DEFAULT_CITY, offers: [], status: RequestStatus.Idle, activeOfferId: '' };
    const expectedState = { city: DEFAULT_CITY, offers, status: RequestStatus.Success, activeOfferId: '' };

    const result = offersSlice.reducer(initialState, fetchOffersAction.fulfilled(offers, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "Failed" with "fetchOffersAction.rejected" action', () => {
    const initialState = { city: DEFAULT_CITY, offers: [], status: RequestStatus.Idle, activeOfferId: '' };
    const expectedState = { city: DEFAULT_CITY, offers: [], status: RequestStatus.Failed, activeOfferId: '' };

    const result = offersSlice.reducer(initialState, fetchOffersAction.rejected(null, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should set "Location" action', () => {
    const location = CITIES[1];
    const initialState = { city: DEFAULT_CITY, offers: [], status: RequestStatus.Idle, activeOfferId: '' };
    const expectedState = { city: location, offers: [], status: RequestStatus.Idle, activeOfferId: '' };

    const result = offersSlice.reducer(initialState, offersSlice.actions.setLocation(location));

    expect(result).toEqual(expectedState);
  });

  it('should update offer with "updateOffers" action', () => {
    const offer = makeFakeOffer();
    const initialState = { city: DEFAULT_CITY, offers: [offer], status: RequestStatus.Idle, activeOfferId: '' };
    const expectedState = { offers: [{ ...offer, isFavorite: !offer.isFavorite }], city: DEFAULT_CITY, status: RequestStatus.Idle, activeOfferId: '' };

    const result = offersSlice.reducer(initialState, offersSlice.actions.updateOffers(offer.id));

    expect(result).toEqual(expectedState);
  });

  it('should set active offer with "setActiveOfferId" action', () => {
    const offer = makeFakeOffer();
    const initialState = { city: DEFAULT_CITY, offers: [], status: RequestStatus.Idle, activeOfferId: '' };
    const expectedState = { city: DEFAULT_CITY, offers: [], status: RequestStatus.Idle, activeOfferId: offer.id };

    const result = offersSlice.reducer(initialState, offersSlice.actions.setActiveOfferId(offer.id));

    expect(result).toEqual(expectedState);
  });
});
