import Container from '@components/container';
import Footer from '@components/footer';

function FavoritesEmpty() {
  return (
    <Container classMain = "page__main--favorites page__main--favorites-empty" extraClass="page--favorites-empty" footer = {<Footer />}>
      <div className="page__favorites-container container" data-testid='favorites-empty'>
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

export default FavoritesEmpty;
