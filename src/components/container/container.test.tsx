import { screen } from '@testing-library/react';
import { renderWithRouterAndProviders } from '@utils/mock-component';
import Container from '.';
import OfferPage from '@pages/offer-page';

describe('Component: Container', () => {
  const containerTestId = 'page__main--offer';

  it('should render correctly', () => {
    renderWithRouterAndProviders(<Container classMain="page__main--offer"><OfferPage /></Container>);

    expect(screen.getByTestId(containerTestId)).toBeInTheDocument();
  });
});
