import Container from '@components/container';
import HelmetComponent from '@components/helmet-component';
import { AppRoute } from '@const';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <>
      <HelmetComponent
        title='six cities - 404 Not Found'
        description='404 Not Found.'
        type='404 Not Found'
      />
      <Container>
        <h2>404 Not Found</h2>
        <Link to={AppRoute.Root}>Go to main page</Link>
      </Container>
    </>
  );
}

export default NotFoundPage;
