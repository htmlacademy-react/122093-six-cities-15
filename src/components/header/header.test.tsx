import { screen } from '@testing-library/react';
import { renderWithRouterAndProviders } from '@utils/mock-component';
import Header from '.';

describe('Component: Header', () => {
  const headerTestId = 'header';

  it('should render header', () => {
    renderWithRouterAndProviders(<Header />);

    expect(screen.getByTestId(headerTestId)).toBeInTheDocument();
  });
});
