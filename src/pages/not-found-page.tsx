import { Helmet } from 'react-helmet-async';
import Container from '../components/container';
import { Link } from 'react-router-dom';
import { AppRoute } from '../const';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>6 cities. 404 Not Found</title>
      </Helmet>
      <Container>
        <h2>404 Not Found</h2>
        <Link to={AppRoute.Root}>Go to main page</Link>
      </Container>
    </>
  );
}
