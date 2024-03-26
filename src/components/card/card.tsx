import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { AppRoute } from '../../const';
import { getRatingWidth } from '../../utils';
import { useAppDispatch } from '../../hooks';
import { offersActions } from '../../store/slices/offers';

type TCardProps = {
  offer: Offer;
  favoriteClass?: string;
  size?: string;
  block: string;
};

function getImageSize(size: string) {
  return size === 'small' ? {width:'150', height:'110'} : {width:'260', height:'200'};
}

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
          <button className={`place-card__bookmark-button ${offer.isFavorite && 'place-card__bookmark-button--active'} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
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
