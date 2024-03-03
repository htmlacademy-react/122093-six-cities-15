import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/main-page';
import LoginPage from './pages/login-page';
import FavoritesPage from './pages/favorites-page';
import OfferPage from './pages/offer-page';
import NotFoundPage from './pages/not-found-page';
import ProtectedRoute from './components/protected-route';
import { AppRoute } from './const';
import { Offer } from './types/offer';
import { Comment } from './types/comment';

type AppProps = {
  offers: Offer[];
  comments: Comment[];
}

export default function App({ offers, comments }: AppProps) {
  const favoritesCount = offers?.filter((offer) => offer.isFavorite);
  return (
    <Routes>
      <Route path={AppRoute.Root} element={<MainPage offers = {offers} favoritesCount = {favoritesCount} />} />
      <Route path={AppRoute.Login} element={<ProtectedRoute unAuthorized><LoginPage /></ProtectedRoute>} />
      <Route path={AppRoute.Favorites} element={<ProtectedRoute><FavoritesPage offers = {offers} favoritesCount = {favoritesCount} /></ProtectedRoute> } />
      <Route path={`${AppRoute.Offer}/:offerId`} element={<OfferPage offers = {offers} comments = {comments} />} />
      <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
    </Routes>
  );
}
