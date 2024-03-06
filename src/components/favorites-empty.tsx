import Container from './container';
import Footer from './footer';

export default function FavoritesEmpty() {
  return (
    <Container classMain = "page__main--favorites page__main--favorites-empty" extraClass="page--favorites-empty" footer = {<Footer />}>
      <div className="page__favorites-container container">
        <section className="favorites favorites--empty">
          <h1 className="visually-hidden">Favorites (empty)</h1>
          <div className="favorites__status-wrapper">
            <b className="favorites__status">Nothing yet saved.</b>
            <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
          </div>
        </section>
      </div>
    </Container>
  );
}
