import Container from '../../components/container/container';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch } from '../../hooks';
import { Link } from 'react-router-dom';
import { AppRoute, CITIES } from '../../const';
import { offersActions } from '../../store/slices/offers';
import LoginForm from './login-form';

export default function LoginPage() {
  const dispatch = useAppDispatch();

  const getRandomCity = () => CITIES[Math.floor(Math.random() * CITIES.length)];
  const randomCity = getRandomCity();

  const handleLocationClick = () => {
    dispatch(offersActions.setLocation(randomCity));
  };

  return (
    <>
      <Helmet>
        <title>6 cities. Login page</title>
      </Helmet>
      <Container extraClass = "page--gray page--login" classMain = "page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Root} onClick={handleLocationClick}>
                <span>{randomCity.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </Container>
    </>
  );
}
