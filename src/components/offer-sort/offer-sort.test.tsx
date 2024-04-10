import { screen } from '@testing-library/react';
import { renderWithRouterAndProviders } from '@utils/mock-component';
import OfferSort from '.';

describe('Component: OfferSort', () => {
  const offerSortTestId = 'offer-sort';

  it('should render correctly', () => {
    renderWithRouterAndProviders(<OfferSort activeSortType='popular' onSortTypeClick={() => {}}/>);

    expect(screen.getByTestId(offerSortTestId)).toBeInTheDocument();
  });
});
