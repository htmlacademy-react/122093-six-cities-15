import Container from '@components/container';
import { AppRoute, CITIES } from '@const';
import { useAppDispatch } from '@hooks/index';
import { offersActions } from '@store/slices/offers';
import { Link } from 'react-router-dom';
import LoginForm from './login-form';
import HelmetComponent from '@components/helmet-component';

function LoginPage() {
  const dispatch = useAppDispatch();

  const getRandomCity = () => CITIES[Math.floor(Math.random() * CITIES.length)];
  const randomCity = getRandomCity();

  const handleLocationClick = () => {
    dispatch(offersActions.setLocation(randomCity));
  };

  return (
    <>
      <HelmetComponent
        title='six cities - login page'
        description='Authorization page allows users to verify their identities and log in to their accounts on a website'
        type='login'
      />
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

export default LoginPage;
