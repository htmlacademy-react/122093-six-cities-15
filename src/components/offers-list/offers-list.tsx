import { ReactNode, useState } from 'react';
import { City } from '../../types/city';
import { Offer } from '../../types/offer';
import Card from '../card/card';
import OfferSort from '../offer-sort/offer-sort';
import { DEFAULT_SORT_TYPE } from '../../const';
import { getSortedOffers } from './helper';

type TOffersListProps = {
  currentOffers: Offer[];
  currentLocation?: City;
  children: ReactNode;
}

export default function OffersList({currentOffers, currentLocation, children}: TOffersListProps) {
  const [activeSortType, setActiveSortType] = useState(DEFAULT_SORT_TYPE);
  const sortedOffers = getSortedOffers(activeSortType, currentOffers);

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{currentOffers.length} {currentOffers.length === 1 ? 'place' : 'places'} to stay in {currentLocation?.name}</b>
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
      <div className="cities__right-section">
        {children}
      </div>
    </div>
  );
}
