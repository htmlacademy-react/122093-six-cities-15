import { screen } from '@testing-library/react';
import { renderWithRouterAndProviders } from '@utils/mock-component';
import MainPage from '.';

describe('Component: MainPage', () => {
  const mainPageHeader = 'Cities';

  it('should render main-page', () => {
    renderWithRouterAndProviders(<MainPage />);

    expect(screen.getByText(mainPageHeader)).toBeInTheDocument();
  });
});
