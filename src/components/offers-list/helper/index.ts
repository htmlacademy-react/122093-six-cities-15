import { SORT_TYPES } from '../../../const';
import { Offer } from '../../../types/offer';

export function getSortedOffers (activeSortType: string, currentOffers: Offer[]) {
  let sortedOffers = null;

  switch (activeSortType) {
    case SORT_TYPES.PriceLowToHigh:
      sortedOffers = currentOffers.toSorted((a, b) => a.price - b.price);
      break;
    case SORT_TYPES.PriceHighToLow:
      sortedOffers = currentOffers.toSorted((a, b) => b.price - a.price);
      break;
    case SORT_TYPES.TopRatedFirst:
      sortedOffers = currentOffers.toSorted((a, b) => b.rating - a.rating);
      break;
    default:
      sortedOffers = currentOffers;
      break;
  }
  return sortedOffers;
}
