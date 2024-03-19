import { SORT_TYPES } from '../const';
import { Offer } from '../types/offer';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getSortedOffers } from '../store/action';
import { useState } from 'react';

type TOfferSortType = {
  currentOffers: Offer[];
  onSortTypeClick: (sortType: string) => void;
  activeSortType: string;
};

export default function OfferSort({activeSortType, onSortTypeClick, currentOffers}: TOfferSortType) {
  const [isSortBarOpened, setSortBarOpened] = useState(false);
  const currentCity = useAppSelector((state) =>state.city.name);
  const offers = useAppSelector((state) => state.offers);
  const offersDefault = offers.filter((offer) => offer.city.name === currentCity);
  const dispatch = useAppDispatch();
  const isSortOpened = () => isSortBarOpened ? 'places__options--opened' : '';
  const isSortActive = (sortType: string) => activeSortType === sortType ? 'places__option--active' : '';

  const handleSortTypeClick = (sortType: string) => {
    let sortedOffers: Offer[];
    onSortTypeClick(sortType);
    setSortBarOpened(!isSortBarOpened);

    switch (sortType) {
      case SORT_TYPES.popular:
        return dispatch(getSortedOffers(offersDefault));
      case SORT_TYPES.priceLowToHigh:
        sortedOffers = [...currentOffers].sort((offerA, offerB) => offerA.price - offerB.price);
        return dispatch(getSortedOffers(sortedOffers));
      case SORT_TYPES.priceHighToLow:
        sortedOffers = [...currentOffers].sort((offerA, offerB) => offerB.price - offerA.price);
        return dispatch(getSortedOffers(sortedOffers));
      case SORT_TYPES.topRatedFirst:
        sortedOffers = [...currentOffers].sort((offerA, offerB) => offerB.rating - offerA.rating);
        return dispatch(getSortedOffers(sortedOffers));
    }
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={() => setSortBarOpened(!isSortBarOpened)}>
        {activeSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isSortOpened()}`}>
        {Object.values(SORT_TYPES).map((sortType) => (
          <li className={`places__option ${isSortActive(sortType)}`} tabIndex={0} key={sortType} onClick={() => handleSortTypeClick(sortType)}>{sortType}</li>
        ))}
      </ul>
    </form>
  );
}
