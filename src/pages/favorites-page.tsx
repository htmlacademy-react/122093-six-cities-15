import Card from '../components/card';
import Container from '../components/container';
import FavoritesLocation from '../components/favorites-location';

type TFavoritesPageProps = {
  card: {
    isPremium: boolean;
    isFavorite: boolean;
  };
}

export default function FavoritesPage({ card }: TFavoritesPageProps) {
  return (
    <Container extraClass = "page--gray page--main" classMain = "page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <FavoritesLocation >
              <Card card={card} cardClass='favorites__card' favoriteClass='favorites__card-info' />
              <Card card={card} cardClass='favorites__card' favoriteClass='favorites__card-info' />
            </FavoritesLocation>

            <FavoritesLocation>
              <Card card={card} cardClass='favorites__card' favoriteClass='favorites__card-info' />
            </FavoritesLocation>
          </ul>
        </section>
      </div>
    </Container>
  );
}
