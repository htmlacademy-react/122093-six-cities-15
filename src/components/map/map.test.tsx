import { screen } from '@testing-library/react';
import { renderWithRouterAndProviders } from '@utils/mock-component';
import { DEFAULT_CITY } from '@const';
import Map from '.';
import { makeFakeOffer } from '@utils/mocks';

describe('Component: Map', () => {
  const fakeOffer = makeFakeOffer();
  const mapTestId = 'map';

  it('should render correctly', () => {
    renderWithRouterAndProviders(<Map currentLocation={DEFAULT_CITY} currentOffers={[fakeOffer]} />);

    expect(screen.getByTestId(mapTestId)).toBeInTheDocument();
  });
});
