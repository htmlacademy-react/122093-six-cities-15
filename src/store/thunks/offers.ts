import { APIRoute } from '../../const';
import { Offer } from '../../types/offer';
import { createAppAsyncThunk } from '../../hooks';

export const fetchOffersAction = createAppAsyncThunk<Offer[], undefined>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    return data;
  }
);

export const fetchOfferByIdAction = createAppAsyncThunk<Offer, Offer['id']>(
  'data/fetchOfferById',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Offer>(`${APIRoute.Offers}/${offerId}`);
    return data;
  }
);

export const fetchNearOffersByIdAction = createAppAsyncThunk<Offer[], Offer['id']>(
  'data/fetchNearOffersById',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${offerId}/nearby`);
    return data;
  }
);
