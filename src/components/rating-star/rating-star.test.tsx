import { screen } from '@testing-library/react';
import { renderWithRouterAndProviders } from '@utils/mock-component';
import RatingStar from '.';
import { RequestStatus } from '@const';

describe('Component: RatingStar', () => {
  const ratingStarTestId = 'rating-star-1';

  it('should render correctly', () => {
    renderWithRouterAndProviders(<RatingStar handleChange={() => {}} formRatingValue={0} status={!!RequestStatus.Loading} />);

    expect(screen.getByTestId(ratingStarTestId)).toBeInTheDocument();
  });
});
