import Container from '@components/container';
import HelmetComponent from '@components/helmet-component';
import Loader from '@components/loader';
import LocationsList from '@components/locations-list';
import Map from '@components/map';
import NoOffers from '@components/no-offers';
import OffersList from '@components/offers-list';
import { RequestStatus } from '@const';
import { useAppSelector } from '@hooks/index';
import { offersSelectors } from '@store/slices/offers';

function MainPage() {
  const offersStatus = useAppSelector(offersSelectors.offersStatus);
  const currentLocation = useAppSelector(offersSelectors.city);
  const offers = useAppSelector(offersSelectors.offers);
  const currentOffers = offers.filter((offer) => offer.city.name === currentLocation.name);
  const pageEmpty = currentOffers.length === 0 ? 'page__main--index-empty' : '';

  if (offersStatus === RequestStatus.Loading) {
    return <Loader />;
  }

  return (
    <>
      <HelmetComponent
        title='six cities - main page'
        description='The main page displays a list of cities for which it is possible to request rental offers.'
        type='main page'
      />
      <Container extraClass="page--gray page--main" classMain={`page__main--index ${pageEmpty}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <LocationsList currentLocation={currentLocation} />
        </div>
        <div className="cities">
          {currentOffers.length
            ?
            <OffersList currentOffers={currentOffers} currentLocation={currentLocation}>
              <Map currentOffers={currentOffers} currentLocation={currentLocation} className='cities__map' />
            </OffersList>
            : <NoOffers currentLocation={currentLocation} />}
        </div>
      </Container>
    </>
  );
}

export default MainPage;
