import { Offer } from '../../../types/offer';

function getFavoritesByLocation(offers: Offer[]) {
  return offers.reduce<{[key: string]: Offer[]}>((acc, current) => {
    const location = current.city.name;
    if (!(location in acc) && current.isFavorite) {
      acc[location] = [];
    }
    if (current.isFavorite) {
      acc[location].push(current);
    }

    return acc;
  },{});
}

export {getFavoritesByLocation};
