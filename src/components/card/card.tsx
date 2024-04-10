import FavoriteButton from '@components/favorite-button';
import { AppRoute } from '@const';
import { useAppDispatch } from '@hooks/index';
import { offersActions } from '@store/slices/offers';
import { Offer } from '@type/offer';
import { capitalizeFirstLetter, getImageSize, getRatingWidth } from '@utils/utils';
import { memo } from 'react';
import { Link } from 'react-router-dom';

type TCardProps = {
  offer: Offer;
  size?: string;
  block: string;
};

function Card({ offer, block, size = 'large' }: TCardProps) {
  const dispatch = useAppDispatch();

  const handleMouseOver = () => {
    dispatch(offersActions.setActiveOfferId(offer.id));
  };

  const handleMouseLeave = () => {
    dispatch(offersActions.setActiveOfferId(''));
  };

  return (
    <article className={`${block}__card place-card`} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} data-testid={`${block}-card`}>
      {offer.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className={`${block}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${offer.id}`} >
          <img className="place-card__image" src={offer.previewImage} {...getImageSize(size)} alt="Place image"/>
        </Link>
      </div>
      <div className={`${block === 'favorites' ? 'favorites__card-info' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton offerId={offer.id} isFavorite={offer.isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getRatingWidth(offer.rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(offer.type)}</p>
      </div>
    </article>
  );
}

const MemoizedCard = memo(Card);
export default MemoizedCard;
