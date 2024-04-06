import { APIRoute, FavoriteStatus } from '@const';
import { createAppAsyncThunk } from '@hooks/index';
import { Offer } from '@type/offer';

export const fetchFavoritesAction = createAppAsyncThunk<Offer[], undefined>(
  'data/fetchFavorites',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Offer[]>(APIRoute.Favorite);
    return data;
  }
);

type ChangeResponse = {
  offer: Offer;
  status: FavoriteStatus;
}

type ChangeProps = {
  offerId: Offer['id'];
  status: FavoriteStatus;
}

export const changeFavoriteStatusAction = createAppAsyncThunk<ChangeResponse, ChangeProps>(
  'data/changeFavoriteStatus',
  async ({offerId, status}, {extra: api}) => {
    const {data} = await api.post<Offer>(`${APIRoute.Favorite}/${offerId}/${status}`, {offerId, status});
    return {offer: data, status};
  }
);
