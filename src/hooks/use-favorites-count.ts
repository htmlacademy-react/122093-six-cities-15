import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '.';
import { favoritesSelectors } from '../store/slices/favorite';
import { RequestStatus } from '../const';
import { fetchFavoritesAction } from '../store/thunks/favorite';

export default function useFavoritesCount () {
  const status = useAppSelector(favoritesSelectors.favoritesStatus);
  const count = useAppSelector(favoritesSelectors.favorites).length;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === RequestStatus.Idle) {
      dispatch(fetchFavoritesAction());
    }
  }, [status, dispatch]);

  return count;
}
