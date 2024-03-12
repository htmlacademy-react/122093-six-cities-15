import Container from '../components/container';
import { Offer } from '../types/offer';
import OffersList from '../components/offers-list';
import { useState } from 'react';
import NoOffers from '../components/no-offers';
import LocationsList from '../components/locations-list';
import Map from '../components/map';
import { City } from '../types/city';
import { useAppSelector, useAppDispatch } from '../hooks';
import { getOffersByCity } from '../store/action';

type TMainPageProps = {
  favoritesCount: Offer[];
};

export default function MainPage({ favoritesCount }: TMainPageProps) {
  const [activeCard, setActiveCard] = useState('');

  const currentLocation = useAppSelector((state) => state.city);
  const curOffs = useAppSelector((state) => state.offers);
  const currentOffers = curOffs.filter((offer) => offer.city.name === currentLocation.name);
  const dispatch = useAppDispatch();

  const handleLocationClick = (location: City) => {
    dispatch(getOffersByCity(location));
  };

  return (
    <Container extraClass = "page--gray page--main" classMain = "page__main--index" favoritesCount = {favoritesCount}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationsList currentLocation={currentLocation} getCurrentLocation={handleLocationClick} />
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          {curOffs.length ?
            <OffersList offers={currentOffers} currentLocation={currentLocation} handleCardMouseOver={(id) => setActiveCard(id)} /> :
            <NoOffers currentLocation={currentLocation} />}
          <div className="cities__right-section">
            <Map currentOffers={currentOffers} currentLocation={currentLocation} activeOffer={activeCard} className='cities__map' />
          </div>
        </div>
      </div>
    </Container>
  );
}
