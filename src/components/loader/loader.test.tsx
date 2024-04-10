import { screen } from '@testing-library/react';
import { renderWithRouterAndProviders } from '@utils/mock-component';
import Loader from '.';

describe('Component: Loader', () => {
  const loaderTestId = 'loader';

  it('should render loader', () => {
    renderWithRouterAndProviders(<Loader />);

    expect(screen.getByTestId(loaderTestId)).toBeInTheDocument();
  });
});
