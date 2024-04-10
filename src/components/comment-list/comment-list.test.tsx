import { screen } from '@testing-library/react';
import { renderWithRouterAndProviders } from '@utils/mock-component';
import CommentList from '.';

describe('Component: CommentList', () => {
  const commentsHeader = /Reviews/i;

  it('should render correctly', () => {
    renderWithRouterAndProviders(<CommentList />);

    expect(screen.getByText(commentsHeader)).toBeInTheDocument();
  });
});
