import { FormEvent, useRef } from 'react';
import Container from '../components/container/container';
import { Helmet } from 'react-helmet-async';
import { useAppDispatch } from '../hooks';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute, CITIES } from '../const';
import { getToken } from '../services/token';
import { loginAction } from '../store/thunks/auth';
import { offersActions } from '../store/slices/offers';

export default function LoginPage() {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        email: loginRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };

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
      <Container extraClass = "page--gray page--main" classMain = "page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input ref={loginRef} className="login__input form__input" type="email" name="email" placeholder="Email" required/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" required/>
              </div>
              <button onClick={() => getToken() && navigate(AppRoute.Root)} className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
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
