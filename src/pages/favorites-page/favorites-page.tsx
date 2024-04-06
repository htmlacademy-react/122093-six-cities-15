import { useAppSelector } from '@hooks/index';
import { favoritesSelectors } from '@store/slices/favorite';
import { getFavoritesByLocation } from './helper';
import Container from '@components/container';
import Footer from '@components/footer';
import FavoritesLocation from '@components/favorites-location';
import Card from '@components/card';
import FavoritesEmpty from '@components/favorites-empty';
import HelmetComponent from '@components/helmet-component';

function FavoritesPage() {
  const favoriteOffers = useAppSelector(favoritesSelectors.favorites);
  const favoritesCount = favoriteOffers.length;
  const favorites = getFavoritesByLocation(favoriteOffers);
  return (
    <>
      <HelmetComponent
        title='six cities - favorites'
        description='The Favorites page displays all the offers that the user has added to his favorites.'
        type='favorites'
      />
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

export default FavoritesPage;
