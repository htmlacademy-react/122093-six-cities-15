import { screen } from '@testing-library/react';
import { renderWithRouterAndProviders } from '@utils/mock-component';
import OffersList from '.';
import Card from '@components/card';
import { makeFakeOffer } from '@utils/mocks';

describe('Component: OffersList', () => {
  const fakeOffer = makeFakeOffer();
  const offersListTestId = 'offers-list';

  it('should render correctly', () => {
    renderWithRouterAndProviders(<OffersList currentOffers={[fakeOffer]}><Card offer={fakeOffer} block='place'/></OffersList>);

    expect(screen.getByTestId(offersListTestId)).toBeInTheDocument();
  });
});
