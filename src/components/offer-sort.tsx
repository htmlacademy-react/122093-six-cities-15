import { useState } from 'react';
import { SORTING_TYPES, DEFAULT_SORTING } from '../const';
import { Offer } from '../types/offer';

type TOfferSortType = {
  currentOffers: Offer[];
  isOpened: boolean;
  onSortingClick: () => void;
};

export default function OfferSort({isOpened, onSortingClick, currentOffers}: TOfferSortType) {
  const isSortOpened = () => isOpened ? 'places__options--opened' : '';

  const [sort, setSort] = useState(DEFAULT_SORTING);
  const isSortActive = (sortType: string) => sort === sortType ? 'places__option--active' : '';

  const changeSorting = (sortType: string) => {
    setSort(sortType);
    onSortingClick();
    switch (sortType) {
      case 'Price: low to high':
        return currentOffers.sort((offerA, offerB) => offerA.price - offerB.price);
      case 'Price: high to low':
        return currentOffers.sort((offerA, offerB) => offerB.price - offerA.price);
      case 'Top rated first':
        return currentOffers.sort((offerA, offerB) => offerB.rating - offerA.rating);
    }
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={onSortingClick}>
        {sort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isSortOpened()}`}>
        {SORTING_TYPES.map((sortType) => (
          <li className={`places__option ${isSortActive(sortType)}`} tabIndex={0} key={sortType} onClick={() => changeSorting(sortType)}>{sortType}</li>
        ))}
      </ul>
    </form>
  );
}
