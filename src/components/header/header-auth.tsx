import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import useFavoritesCount from '../../hooks/use-favorites-count';
import { authSelectors } from '../../store/slices/auth';
import { logoutAction } from '../../store/thunks/auth';

export default function HeaderAuth () {
  const userData = useAppSelector(authSelectors.userData);
  const favoritesCount = useFavoritesCount();
  const dispatch = useAppDispatch();

  const handleSignOutClick = () => {
    dispatch(logoutAction());
  };

  return (
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
    </>
  );
}
