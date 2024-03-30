import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/main-page/main-page';
import LoginPage from './pages/login-page/login-page';
import FavoritesPage from './pages/favorites-page/favorites-page';
import OfferPage from './pages/offer-page/offer-page';
import NotFoundPage from './pages/not-found-page/not-found-page';
import ProtectedRoute from './components/protected-route/protected-route';
import { AppRoute } from './const';
import { useAppDispatch } from './hooks';
import { checkAuthAction } from './store/thunks/auth';
import { fetchOffersAction } from './store/thunks/offers';
import { getToken } from './services/token';
import { useEffect } from 'react';

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
