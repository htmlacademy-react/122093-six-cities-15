import { screen } from '@testing-library/react';
import { renderWithRouterAndProviders } from '@utils/mock-component';
import FavoritesEmpty from '.';

describe('Component: FavoritesEmpty', () => {
  const favoritesEmptyTestId = 'favorites-empty';

  it('should render correctly', () => {
    renderWithRouterAndProviders(<FavoritesEmpty />);

    expect(screen.getByTestId(favoritesEmptyTestId)).toBeInTheDocument();
  });
});
