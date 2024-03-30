import { Helmet } from 'react-helmet-async';
import Card from '../../components/card/card';
import Container from '../../components/container/container';
import FavoritesLocation from '../../components/favorites-location/favorites-location';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import Footer from '../../components/footer/footer';
import { useAppSelector } from '../../hooks';
import { favoritesSelectors } from '../../store/slices/favorite';
import { getFavoritesByLocation } from './helper';

export default function FavoritesPage() {
  const favoriteOffers = useAppSelector(favoritesSelectors.favorites);
  const favoritesCount = favoriteOffers.length;
  const favorites = getFavoritesByLocation(favoriteOffers);
  return (
    <>
      <Helmet>
        <title>6 cities. Favorites page</title>
      </Helmet>
      {favoritesCount &&
        (
          <Container classMain="page__main--favorites" footer = {<Footer />}>
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  { Object.entries(favorites).map(([cityName, offers]) => (
                    <FavoritesLocation key={cityName} cityName={cityName}>
                      {offers.map((offer) => (
                        <Card key={offer.id} offer={offer}
                          block='favorites'
                          favoriteClass='favorites__card-info'
                          size = 'small'
                        />
                      ))}
                    </FavoritesLocation>))}
                </ul>
              </section>
            </div>
          </Container>
        )}
      {!favoritesCount && <FavoritesEmpty />}
    </>
  );
}
