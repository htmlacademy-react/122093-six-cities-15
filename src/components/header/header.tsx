import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import useAuth from '../../hooks/use-auth';
import HeaderAuth from './header-auth';
import HeaderUnauth from './header-unauth';

type THeaderProps = {
  classMain?: string;
}

export default function Header({ classMain }: THeaderProps) {
  const isAuthorized = useAuth();
  const activeLogo = classMain === 'page__main--index' ? 'header__logo-link--active' : '';

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className={`header__logo-link ${activeLogo}`} to={AppRoute.Root}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          {classMain !== 'page__main--login' &&
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isAuthorized && <HeaderAuth />}
              {!isAuthorized && <HeaderUnauth />}
            </ul>
          </nav>}
        </div>
      </div>
    </header>
  );
}
