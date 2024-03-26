import Container from '../components/container/container';
import OffersList from '../components/offers-list/offers-list';
import NoOffers from '../components/no-offers/no-offers';
import LocationsList from '../components/locations-list/locations-list';
import Map from '../components/map/map';
import { City } from '../types/city';
import { useAppSelector, useAppDispatch } from '../hooks';
import Loader from '../components/loader/loader';
import { offersActions, offersSelectors } from '../store/slices/offers';
import { useCallback } from 'react';
import { RequestStatus } from '../const';

export default function MainPage() {
  const requestStatus = useAppSelector(offersSelectors.offersStatus);
  const currentLocation = useAppSelector(offersSelectors.city);
  const offers = useAppSelector(offersSelectors.offers);
  const currentOffers = offers.filter((offer) => offer.city.name === currentLocation.name);
  const dispatch = useAppDispatch();

  const handleLocationClick = useCallback((location: City) => {
    dispatch(offersActions.setLocation(location));
  }, [dispatch]);

  if (requestStatus === RequestStatus.Loading) {
    return <Loader />;
  }

  return (
    <Container extraClass = "page--gray page--main" classMain = "page__main--index" >
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationsList currentLocation={currentLocation} getCurrentLocation={handleLocationClick} />
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          {currentOffers.length ?
            <OffersList currentOffers={currentOffers}
              currentLocation={currentLocation}
            /> :
            <NoOffers currentLocation={currentLocation} />}
          <div className="cities__right-section">
            <Map currentOffers={currentOffers} currentLocation={currentLocation} className='cities__map' />
          </div>
        </div>
      </div>
    </Container>
  );
}
