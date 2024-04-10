import { screen } from '@testing-library/react';
import Card from '.';
import { makeFakeOffer } from '@utils/mocks';
import { renderWithRouterAndProviders } from '@utils/mock-component';

describe('Component: Card', () => {
  const offer = makeFakeOffer();

  const placeCardTestId = 'place-card';
  const favoritesCardTestId = 'favorites-card';
  const nearPlaceCardTestId = 'near-places-card';

  it('should render place card', () => {
    renderWithRouterAndProviders(<Card offer={offer} block="place" />);

    expect(screen.getByTestId(placeCardTestId)).toBeInTheDocument();
  });

  it('should render favorites card', () => {
    renderWithRouterAndProviders(<Card offer={offer} block="favorites" size='small' />);

    expect(screen.getByTestId(favoritesCardTestId)).toBeInTheDocument();
  });

  it('should render near place card', () => {
    renderWithRouterAndProviders(<Card offer={offer} block="near-places" />);

    expect(screen.getByTestId(nearPlaceCardTestId)).toBeInTheDocument();
  });
});
