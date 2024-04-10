import { screen } from '@testing-library/react';
import { renderWithRouterAndProviders } from '@utils/mock-component';
import NoOffers from '.';
import { DEFAULT_CITY } from '@const';

describe('Component: NoOffers', () => {
  const noOffersTestId = 'no-offers';

  it('should render correctly', () => {
    renderWithRouterAndProviders(<NoOffers currentLocation={DEFAULT_CITY} />);

    expect(screen.getByTestId(noOffersTestId)).toBeInTheDocument();
  });
});
