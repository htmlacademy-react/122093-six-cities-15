import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { makeFakeOffer } from '@utils/mocks';
import { renderWithRouterAndProviders } from '@utils/mock-component';
import CommentForm from '.';

describe('Component: Comment form', () => {
  it('should render correctly', () => {
    const fakeOffer = makeFakeOffer();
    const commentTextAreaTestId = 'review-textarea';

    renderWithRouterAndProviders(<CommentForm offerId={fakeOffer.id} />);

    expect(screen.getByTestId(commentTextAreaTestId)).toBeInTheDocument();
  });

  it('should render correctly when user enter review text', async () => {
    const fakeOffer = makeFakeOffer();
    const commentTextAreaTestId = 'review-textarea';

    renderWithRouterAndProviders(<CommentForm offerId={fakeOffer.id} />);

    const commentTextArea = screen.getByTestId(commentTextAreaTestId);
    expect(commentTextArea).toBeInTheDocument();
    const expectedComment = 'test-textarea';

    await userEvent.type(
      commentTextArea,
      expectedComment
    );

    expect(commentTextArea).toHaveValue(expectedComment);
  });
});
