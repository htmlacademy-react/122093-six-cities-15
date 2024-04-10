import { screen } from '@testing-library/react';
import { renderWithRouterAndProviders } from '@utils/mock-component';
import LoadMoreButton from './load-more-button';

describe('Component: LoadMoreButton', () => {
  const loadMoreButtonTestId = 'load-more-button';

  it('should render correctly', () => {
    renderWithRouterAndProviders(<LoadMoreButton handleClick={() => {}} />);

    expect(screen.getByTestId(loadMoreButtonTestId)).toBeInTheDocument();
  });
});
