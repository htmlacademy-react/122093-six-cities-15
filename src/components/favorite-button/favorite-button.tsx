import { AppRoute, RequestStatus } from '@const';
import { useAppDispatch, useAppSelector } from '@hooks/index';
import { getToken } from '@services/token';
import { favoritesSelectors } from '@store/slices/favorite';
import { offerDetailActions } from '@store/slices/offer-detail';
import { offersActions } from '@store/slices/offers';
import { changeFavoriteStatusAction } from '@store/thunks/favorite';
import { useNavigate } from 'react-router-dom';

type FavoriteButtonProps = {
  extraClass?: 'offer' | 'place-card';
  isFavorite?: boolean;
  offerId: string;
  width?: number;
  height?: number;
}

function FavoriteButton ({extraClass = 'place-card', isFavorite = false, offerId, width = 18, height = 19}: FavoriteButtonProps) {
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
    <button className={favoriteClass} type="button" onClick={handleClick} disabled={status === RequestStatus.Loading} data-testid="favorite-button">
      <svg className={`${extraClass}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{favoriteLabel}</span>
    </button>
  );
}

export default FavoriteButton;
