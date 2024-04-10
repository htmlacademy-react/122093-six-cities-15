import { screen } from '@testing-library/react';
import { renderWithRouterAndProviders } from '@utils/mock-component';
import LocationsList from '.';
import { DEFAULT_CITY } from '@const';

describe('Component: LocationsList', () => {
  const locationsListTestId = 'locations-list';

  it('should render correctly', () => {
    renderWithRouterAndProviders(<LocationsList currentLocation={DEFAULT_CITY}/>);

    expect(screen.getByTestId(locationsListTestId)).toBeInTheDocument();
  });
});
