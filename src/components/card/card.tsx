import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { AppRoute } from '../../const';
import { getImageSize, getRatingWidth } from '../../utils';
import { useAppDispatch } from '../../hooks';
import { offersActions } from '../../store/slices/offers';
import FavoriteButton from '../favorite-button/favorite-button';

type TCardProps = {
  offer: Offer;
  favoriteClass?: string;
  size?: string;
  block: string;
};

export default function Card({ offer, favoriteClass, block, size = 'large' }: TCardProps) {
  const dispatch = useAppDispatch();

  return (
    <article className={`${block}__card place-card`} onMouseOver={() => dispatch(offersActions.setActiveOfferId(offer.id))}>
      {offer.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className={`${block}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${offer.id}`} >
          <img className="place-card__image" src={offer.previewImage} {...getImageSize(size)} alt="Place image"/>
        </Link>
      </div>
      <div className={`${favoriteClass ? favoriteClass : ''} place-card__info`}>
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
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}
