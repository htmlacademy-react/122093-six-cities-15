import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/main-page';
import LoginPage from './pages/login-page';
import FavoritesPage from './pages/favorites-page';
import OfferPage from './pages/offer-page';
import NotFoundPage from './pages/not-found-page';
import ProtectedRoute from './components/protected-route';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage cards = {Array.from({ length: 5 }, () => ({isFavorite: true, isPremium: true}))} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/favorites" element={<ProtectedRoute hasAccess={false}><FavoritesPage card = {{isFavorite: true, isPremium: true}} /></ProtectedRoute> } />
      <Route path="/offer/:id" element={<OfferPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
