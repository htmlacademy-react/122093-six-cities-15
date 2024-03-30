import Container from '../../components/container/container';
import { capitalizeFirstLetter, getRatingWidth } from '../../utils';
import CommentForm from '../../components/comment-form/comment-form';
import CommentList from '../../components/comment-list/comment-list';
import Map from '../../components/map/map';
import Card from '../../components/card/card';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Loader from '../../components/loader/loader';
import { Offer } from '../../types/offer';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NotFoundPage from '../not-found-page/not-found-page';
import useAuth from '../../hooks/use-auth';
import { offerDetailSelectors } from '../../store/slices/offer-detail';
import { fetchNearOffersByIdAction, fetchOfferByIdAction } from '../../store/thunks/offers';
import { fetchCommentsByIdAction } from '../../store/thunks/comments';
import { MAX_IMAGES_COUNT, MAX_NEAR_OFFERS, RequestStatus } from '../../const';
import FavoriteButton from '../../components/favorite-button/favorite-button';

export default function OfferPage() {
  const {offerId = ''} = useParams();
  const isAuthorized = useAuth();
  const requestStatus = useAppSelector(offerDetailSelectors.offerDetailStatus);
  const offerDetail = useAppSelector(offerDetailSelectors.offerDetail);
  const nearOffers = useAppSelector(offerDetailSelectors.nearOffers);

  const randomNearOffers = nearOffers.slice(0, MAX_NEAR_OFFERS);
  const nearOffersPlusCurrent = [...randomNearOffers, offerDetail] as Offer[];

  const dispatch = useAppDispatch();
  useEffect(() => {
    Promise.all([
      dispatch(fetchOfferByIdAction(offerId)),
      dispatch(fetchCommentsByIdAction(offerId)),
      dispatch(fetchNearOffersByIdAction(offerId))
    ]);
  },[dispatch, offerId]);

  if (requestStatus === RequestStatus.Loading) {
    return (
      <Loader />
    );
  }

  if (!offerDetail || requestStatus === RequestStatus.Failed) {
    return (
      <NotFoundPage />
    );
  }

  return (
    <Container classMain = "page__main--offer">
      <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {offerDetail.images.slice(0, MAX_IMAGES_COUNT).map((image) => (
              <div className="offer__image-wrapper" key={image}>
                <img className="offer__image" src={image} alt="Photo studio"/>
              </div>
            ))}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            {offerDetail.isPremium &&
              (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {offerDetail.title}
              </h1>
              <FavoriteButton isFavorite={offerDetail.isFavorite} offerId={offerId} extraClass="offer" width={31} height={33} />
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{ width: getRatingWidth(offerDetail.rating || 0) }}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{offerDetail.rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {capitalizeFirstLetter(offerDetail.type)}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {offerDetail.bedrooms} {offerDetail.bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}
              </li>
              <li className="offer__feature offer__feature--adults">
              Max {offerDetail.maxAdults} {offerDetail.maxAdults > 1 ? 'adults' : 'adult'}
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{offerDetail.price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {offerDetail.goods.map((good) => (
                  <li className="offer__inside-item" key={good}>
                    {good}
                  </li>
                ))}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className={`offer__avatar-wrapper ${offerDetail.host.isPro && 'offer__avatar-wrapper--pro'} user__avatar-wrapper`}>
                  <img className="offer__avatar user__avatar" src={offerDetail.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                </div>
                <span className="offer__user-name">
                  {offerDetail.host.name}
                </span>
                {offerDetail.host.isPro &&
                  (
                    <span className="offer__user-status">
                        Pro
                    </span>
                  )}
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  {offerDetail.description}
                </p>
              </div>
            </div>
            <section className="offer__reviews reviews">
              <CommentList />
              {isAuthorized && <CommentForm offerId={offerId} />}
            </section>
          </div>
        </div>
        <Map currentOffers={nearOffersPlusCurrent} currentLocation={offerDetail.city} offerDetailId={offerDetail.id} className='offer__map' />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {randomNearOffers.map((offer) => (
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
