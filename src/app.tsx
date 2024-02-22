import MainPage from './pages/main-page';

export default function App() {
  return <MainPage cards = {Array.from({ length: 5 }, () => ({isFavorite: true, isPremium: true}))} />;
}
