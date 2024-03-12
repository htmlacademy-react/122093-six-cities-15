import { useState } from 'react';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import Card from './card';
import OfferSort from './offer-sort';

type TOffersListProps = {
  offers: Offer[];
  currentLocation?: City;
  handleCardMouseOver: (id: string) => void;
}

export default function OffersList({offers, currentLocation, handleCardMouseOver}: TOffersListProps) {
  const [isSortingOpened, setSortingOpened] = useState(false);
  const handleSortingClick = () => {
    setSortingOpened((current) => !current);
  };

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {currentLocation?.name}</b>
      <OfferSort isOpened={isSortingOpened} onSortingClick={handleSortingClick} currentOffers={offers}/>
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <Card key={offer.id}
            offer={offer}
            block="cities"
            handleCardMouseOver={(id = offer.id) => handleCardMouseOver(id)}
          />
        ))}
      </div>
    </section>
  );
}
