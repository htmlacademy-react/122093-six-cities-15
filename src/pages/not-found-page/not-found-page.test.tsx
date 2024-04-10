import { screen } from '@testing-library/react';
import { renderWithRouterAndProviders } from '@utils/mock-component';
import NotFoundPage from '.';

describe('Component: NotFoundPage', () => {
  const notFoundPageHeader = '404 Not Found';

  it('should render not-found-page', () => {
    renderWithRouterAndProviders(<NotFoundPage />);

    expect(screen.getByText(notFoundPageHeader)).toBeInTheDocument();
  });
});
