import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/main-page';
import LoginPage from './pages/login-page';
import FavoritesPage from './pages/favorites-page';
import OfferPage from './pages/offer-page';
import NotFoundPage from './pages/not-found-page';
import ProtectedRoute from './components/protected-route/protected-route';
import { AppRoute } from './const';
import { Offer } from './types/offer';

type AppProps = {
  offers: Offer[];
}

export default function App({ offers }: AppProps) {
  return (
    <Routes>
      <Route path={AppRoute.Root} element={<MainPage />} />
      <Route path={AppRoute.Login} element={<ProtectedRoute unAuthorized><LoginPage /></ProtectedRoute>} />
      <Route path={AppRoute.Favorites} element={<ProtectedRoute><FavoritesPage offers = {offers} /></ProtectedRoute> } />
      <Route path={`${AppRoute.Offer}/:offerId`} element={<OfferPage />} />
      <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
    </Routes>
  );
}
