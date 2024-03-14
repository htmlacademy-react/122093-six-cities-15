import { City } from '../types/city';
import { Offer } from '../types/offer';
import Card from './card';
import OfferSort from './offer-sort';

type TOffersListProps = {
  offers: Offer[];
  currentLocation?: City;
  onSortTypeClick: (sortType: string) => void;
  activeSortType: string;
}

export default function OffersList({offers, currentLocation, activeSortType, onSortTypeClick}: TOffersListProps) {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {currentLocation?.name}</b>
      <OfferSort activeSortType={activeSortType} onSortTypeClick={(sortType) => onSortTypeClick(sortType)} currentOffers={offers}/>
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <Card key={offer.id}
            offer={offer}
            block="cities"
          />
        ))}
      </div>
    </section>
  );
}
