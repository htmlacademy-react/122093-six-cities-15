import { DEFAULT_SORT_TYPE } from '@const';
import { ReactNode, memo, useState } from 'react';
import { getSortedOffers } from './helper';
import { Offer } from '@type/offer';
import { City } from '@type/city';
import OfferSort from '@components/offer-sort';
import Card from '@components/card';
import { pluralize } from '@utils/utils';

type TOffersListProps = {
  currentOffers: Offer[];
  currentLocation?: City;
  children: ReactNode;
}

function OffersList({currentOffers, currentLocation, children}: TOffersListProps) {
  const [activeSortType, setActiveSortType] = useState(DEFAULT_SORT_TYPE);
  const sortedOffers = getSortedOffers(activeSortType, currentOffers);

  return (
    <div className="cities__places-container container" data-testid='offers-list'>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{pluralize(currentOffers.length, 'place')} to stay in {currentLocation?.name}</b>
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

const MemoizedOffersList = memo(OffersList);
export default MemoizedOffersList;
