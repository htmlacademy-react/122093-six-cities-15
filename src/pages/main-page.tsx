import Container from '../components/container';
import { Offer } from '../types/offer';
import OffersList from '../components/offers-list';
import { useState } from 'react';
import NoOffers from '../components/no-offers';
import LocationsList from '../components/locations-list';
import { DEFAULT_CITY } from '../const';

type TMainPageProps = {
  offers: Offer[];
  favoritesCount: Offer[];
};

export default function MainPage({ offers, favoritesCount }: TMainPageProps) {
  const [activeCard, setActiveCard] = useState('');
  window.console.log(activeCard);

  const [currentLocation, setCurrentLocation] = useState(DEFAULT_CITY);
  const currentOffers = offers.filter((offer) => offer.city.name === currentLocation);

  return (
    <Container extraClass = "page--gray page--main" classMain = "page__main--index" favoritesCount = {favoritesCount}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationsList currentLocation={currentLocation} getCurrentLocation={(location: string) => setCurrentLocation(location)} />
      </div>
      <div className="cities">
        {currentOffers.length ?
          <OffersList offers={currentOffers} currentLocation={currentLocation} handleCardMouseOver={(id) => setActiveCard(id)} /> :
          <NoOffers currentLocation={currentLocation} />}
      </div>
    </Container>
  );
}