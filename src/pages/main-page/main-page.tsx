import Container from '../../components/container/container';
import OffersList from '../../components/offers-list/offers-list';
import NoOffers from '../../components/no-offers/no-offers';
import LocationsList from '../../components/locations-list/locations-list';
import Map from '../../components/map/map';
import { useAppSelector } from '../../hooks';
import Loader from '../../components/loader/loader';
import { offersSelectors } from '../../store/slices/offers';
import { RequestStatus } from '../../const';

export default function MainPage() {
  const requestStatus = useAppSelector(offersSelectors.offersStatus);
  const currentLocation = useAppSelector(offersSelectors.city);
  const offers = useAppSelector(offersSelectors.offers);
  const currentOffers = offers.filter((offer) => offer.city.name === currentLocation.name);
  const pageEmpty = currentOffers.length === 0 ? 'page__main--index-empty' : '';

  if (requestStatus === RequestStatus.Loading) {
    return <Loader />;
  }

  return (
    <Container extraClass = "page--gray page--main" classMain = {`page__main--index ${pageEmpty}`} >
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationsList currentLocation={currentLocation} />
      </div>
      <div className="cities">
        {currentOffers.length
          ?
          <OffersList currentOffers={currentOffers} currentLocation={currentLocation} >
            <Map currentOffers={currentOffers} currentLocation={currentLocation} className='cities__map' />
          </OffersList>
          : <NoOffers currentLocation={currentLocation} />}
      </div>
    </Container>
  );
}
