import Container from '../components/container/container';
import OffersList from '../components/offers-list/offers-list';
import NoOffers from '../components/no-offers/no-offers';
import LocationsList from '../components/locations-list/locations-list';
import Map from '../components/map/map';
import { City } from '../types/city';
import { useAppSelector, useAppDispatch } from '../hooks';
import { getSelectedCity } from '../store/action';
import Loader from '../components/loader/loader';

export default function MainPage() {
  const isLoading = useAppSelector((state) =>state.isDataLoading);
  const currentLocation = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const currentOffers = offers.filter((offer) => offer.city.name === currentLocation.name);
  const dispatch = useAppDispatch();

  const handleLocationClick = (location: City) => {
    dispatch(getSelectedCity(location));
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
