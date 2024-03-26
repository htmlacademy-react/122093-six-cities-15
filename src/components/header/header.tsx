import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { store } from '../../store';
import { logoutAction } from '../../store/thunks/auth';
import useAuth from '../../hooks/use-auth';
import { authSelectors } from '../../store/slices/auth';

type THeaderProps = {
  classMain?: string;
}

export default function Header({ classMain }: THeaderProps) {
  const isAuthorized = useAuth();
  const userData = useAppSelector(authSelectors.userData);
  const favoritesCount = 3;

  const handleSignOutClick = () => {
    store.dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={AppRoute.Root}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          {classMain !== 'page__main--login' &&
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isAuthorized ?
                <>
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">{userData?.email}</span>
                      <span className="header__favorite-count">{favoritesCount}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to="#" onClick={handleSignOutClick}>
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </> :
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>}
            </ul>
          </nav>}
        </div>
      </div>
    </header>
  );
}
