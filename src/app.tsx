import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from './hooks';
import { getToken } from '@services/token';
import { checkAuthAction } from '@store/thunks/auth';
import { fetchOffersAction } from '@store/thunks/offers';
import { AppRoute } from '@const';
import MainPage from '@pages/main-page';
import ProtectedRoute from '@components/protected-route';
import LoginPage from '@pages/login-page';
import FavoritesPage from '@pages/favorites-page';
import OfferPage from '@pages/offer-page';
import NotFoundPage from '@pages/not-found-page';

export default function App() {
  const dispatch = useAppDispatch();

  const token = getToken();
  useEffect(() => {
    if (token) {
      dispatch(checkAuthAction());
    }
    dispatch(fetchOffersAction());
  }, [token, dispatch]);

  return (
    <Routes>
      <Route path={AppRoute.Root} element={<MainPage />} />
      <Route path={AppRoute.Login} element={<ProtectedRoute unAuthorized><LoginPage /></ProtectedRoute>} />
      <Route path={AppRoute.Favorites} element={<ProtectedRoute><FavoritesPage /></ProtectedRoute> } />
      <Route path={`${AppRoute.Offer}/:offerId`} element={<OfferPage />} />
      <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
    </Routes>
  );
}
