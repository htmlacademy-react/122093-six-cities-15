import { screen } from '@testing-library/react';
import { renderWithRouterAndProviders } from '@utils/mock-component';
import FavoritesLocation from '.';
import LocationsList from '@components/locations-list';
import { DEFAULT_CITY } from '@const';

describe('Component: FavoritesLocation', () => {
  const favoritesLocationTestId = 'favorites-location';

  it('should render correctly', () => {
    renderWithRouterAndProviders(<FavoritesLocation cityName={DEFAULT_CITY.name}><LocationsList currentLocation={DEFAULT_CITY}/></FavoritesLocation>);

    const cityNameTestId = screen.getByTestId('city-name');

    expect(screen.getByTestId(favoritesLocationTestId)).toBeInTheDocument();
    expect(cityNameTestId).toBeInTheDocument();
    expect(cityNameTestId).toHaveTextContent(DEFAULT_CITY.name);
  });
});
