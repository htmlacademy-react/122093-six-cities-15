import { useParams } from 'react-router-dom';
import Container from '../components/container';
import { Offer } from '../types/offer';
import { Comment } from '../types/comment';
import { getRatingWidth, isAuthorized } from '../utils';
import CommentForm from '../components/comment-form';
import CommentList from '../components/comment-list';
import Map from '../components/map';
import Card from '../components/card';

type OfferPageProps = {
  offers: Offer[];
  comments: Comment[];
}

export default function OfferPage({offers, comments}: OfferPageProps) {
  const { offerId } = useParams();
  const offerDetail = offers.find((offer) => offer.id === offerId) as Offer;
  const currentOffers = offers.filter((offer) => offer.city.name === offerDetail.city.name);
  return (
    <Container classMain = "page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {offerDetail?.images.map((image) => (
              <div className="offer__image-wrapper" key={image}>
                <img className="offer__image" src={image} alt="Photo studio"/>
              </div>
            ))}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {offerDetail?.isPremium &&
              (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {offerDetail?.title}
              </h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{ width: getRatingWidth(offerDetail?.rating || 0) }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{offerDetail?.rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {offerDetail?.type}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {offerDetail?.bedrooms}
              </li>
              <li className="offer__feature offer__feature--adults">
                {offerDetail?.maxAdults}
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{offerDetail?.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {offerDetail?.goods.map((good) => (
                  <li className="offer__inside-item" key={good}>
                    {good}
                  </li>
                ))}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="offer__avatar user__avatar" src={offerDetail?.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                </div>
                <span className="offer__user-name">
                  {offerDetail?.host.name}
                </span>
                {offerDetail?.host.isPro &&
                  (
                    <span className="offer__user-status">
                        Pro
                    </span>
                  )}
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  {offerDetail?.description}
                </p>
              </div>
            </div>
            <section className="offer__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
              <CommentList comments={comments} />
              {isAuthorized && <CommentForm />}
            </section>
          </div>
        </div>
        <Map currentOffers={currentOffers} currentLocation={offerDetail.city} className='offer__map' />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {currentOffers.map((offer) => (
              <Card key={offer.id}
                offer={offer}
                block='near-places'
              />
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
}
