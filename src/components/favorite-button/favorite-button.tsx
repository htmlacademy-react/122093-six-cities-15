import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getToken } from '../../services/token';
import { changeFavoriteStatusAction } from '../../store/thunks/favorite';
import { AppRoute, RequestStatus } from '../../const';
import { favoritesSelectors } from '../../store/slices/favorite';
import { offersActions } from '../../store/slices/offers';
import { offerDetailActions } from '../../store/slices/offer-detail';

type FavoriteButtonProps = {
  extraClass?: 'offer' | 'place-card';
  isFavorite?: boolean;
  offerId: string;
  width?: number;
  height?: number;
}

export default function FavoriteButton ({extraClass = 'place-card', isFavorite = false, offerId, width = 18, height = 19}: FavoriteButtonProps) {
  const favoriteLabel = `${isFavorite ? 'In' : 'To'} bookmarks`;
  const favoriteClass = `${extraClass}__bookmark-button ${isFavorite && `${extraClass}__bookmark-button--active`} button`;
  const token = getToken();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const status = useAppSelector(favoritesSelectors.favoritesStatus);

  const handleClick = () => {
    if (!token) {
      navigate(AppRoute.Login);
    }

    dispatch(changeFavoriteStatusAction({offerId, status: Number(!isFavorite)}));

    if (status === RequestStatus.Success) {
      dispatch(offersActions.updateOffers(offerId));
      dispatch(offerDetailActions.updateOfferDetail(offerId));
    }
  };

  return (
    <button className={favoriteClass} type="button" onClick={handleClick} disabled={status === RequestStatus.Loading}>
      <svg className={`${extraClass}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{favoriteLabel}</span>
    </button>
  );
}
