import { ReactNode } from 'react';
import { City } from '../types/city';
import { Offer } from '../types/offer';
import Card from './card';

type TOffersListProps = {
  offers: Offer[];
  currentLocation?: City;
  handleCardMouseOver: (id: string) => void;
  sort?: ReactNode;
}

export default function OffersList({offers, currentLocation, handleCardMouseOver, sort}: TOffersListProps) {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {currentLocation?.name}</b>
      {sort}
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
