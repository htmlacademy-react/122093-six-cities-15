import { screen } from '@testing-library/react';
import { renderWithRouterAndProviders } from '@utils/mock-component';
import FavoriteButton from '.';
import { makeFakeOffer } from '@utils/mocks';

describe('Component: FavoriteButton', () => {
  const fakeOffer = makeFakeOffer();
  const favoriteButtonTestId = 'favorite-button';

  it('should render correctly', () => {
    renderWithRouterAndProviders(<FavoriteButton offerId={fakeOffer.id} />);

    expect(screen.getByTestId(favoriteButtonTestId)).toBeInTheDocument();
  });
});
