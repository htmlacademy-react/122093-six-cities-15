import { Helmet } from 'react-helmet-async';
import Card from '../components/card';
import Container from '../components/container';
import FavoritesLocation from '../components/favorites-location';
import { Offer } from '../types/offer';
import FavoritesEmpty from '../components/favorites-empty';
import Footer from '../components/footer';
import { useAppSelector } from '../hooks';

type TFavoritesPageProps = {
  offers: Offer[];
}

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

function renderFavorites(favorites: {[key: string]: Offer[]}) {
  const favoritesList = [];
  for (const cityName in favorites) {
    favoritesList.push(
      <FavoritesLocation key={cityName} cityName={cityName}>
        {favorites[cityName].map((offer) => (
          <Card key={offer.id} offer={offer}
            block='favorites'
            favoriteClass='favorites__card-info'
            size = 'small'
          />
        ))}
      </FavoritesLocation>
    );
  }

  return favoritesList;
}

export default function FavoritesPage({ offers }: TFavoritesPageProps) {
  const favoritesCount = useAppSelector((state) => state.favoritesCount);
  const favorites = getFavoritesByLocation(offers);
  return (
    <>
      <Helmet>
        <title>6 cities. Favorites page</title>
      </Helmet>
      {favoritesCount ?
        <Container classMain="page__main--favorites" footer = {<Footer />}>
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {renderFavorites(favorites)}
              </ul>
            </section>
          </div>
        </Container> :
        <FavoritesEmpty />}
    </>
  );
}
