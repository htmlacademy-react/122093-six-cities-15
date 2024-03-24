import { useState } from 'react';
import { City } from '../../types/city';
import { Offer } from '../../types/offer';
import Card from '../card/card';
import OfferSort from '../offer-sort/offer-sort';
import { DEFAULT_SORT_TYPE } from '../../const';
import { getSortedOffers } from './helper';

type TOffersListProps = {
  currentOffers: Offer[];
  currentLocation?: City;
}

export default function OffersList({currentOffers, currentLocation}: TOffersListProps) {
  const [activeSortType, setActiveSortType] = useState(DEFAULT_SORT_TYPE);
  const sortedOffers = getSortedOffers(activeSortType, currentOffers);

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{currentOffers.length} places to stay in {currentLocation?.name}</b>
      <OfferSort activeSortType={activeSortType} onSortTypeClick={setActiveSortType} />
      <div className="cities__places-list places__list tabs__content">
        {sortedOffers.map((offer) => (
          <Card key={offer.id}
            offer={offer}
            block="cities"
          />
        ))}
      </div>
    </section>
  );
}
