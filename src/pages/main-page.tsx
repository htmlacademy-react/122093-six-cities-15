import Container from '../components/container';
import OffersList from '../components/offers-list';
import { useState } from 'react';
import NoOffers from '../components/no-offers';
import LocationsList from '../components/locations-list';
import Map from '../components/map';
import { City } from '../types/city';
import { useAppSelector, useAppDispatch } from '../hooks';
import { getSelectedCity } from '../store/action';
import { DEFAULT_SORT_TYPE } from '../const';
import Loader from '../components/loader/loader';

export default function MainPage() {
  const isLoading = useAppSelector((state) =>state.isDataLoading);
  const [activeSortType, setActiveSortType] = useState(DEFAULT_SORT_TYPE);

  const currentLocation = useAppSelector((state) => state.city);
  const currentOffers = useAppSelector((state) => state.sortedOffers);
  const dispatch = useAppDispatch();

  const handleLocationClick = (location: City) => {
    dispatch(getSelectedCity(location));
    setActiveSortType(DEFAULT_SORT_TYPE);
  };

  return (
    isLoading === true ?
      <Loader /> :
      <Container extraClass = "page--gray page--main" classMain = "page__main--index" >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationsList currentLocation={currentLocation} getCurrentLocation={handleLocationClick} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            {currentOffers.length ?
              <OffersList offers={currentOffers}
                currentLocation={currentLocation}
                activeSortType={activeSortType}
                onSortTypeClick={(sortType) => setActiveSortType(sortType)}
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
