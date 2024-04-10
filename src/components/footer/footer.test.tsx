import { screen } from '@testing-library/react';
import { renderWithRouterAndProviders } from '@utils/mock-component';
import Footer from '.';

describe('Component: Footer', () => {
  const footerTestId = 'footer';

  it('should render footer', () => {
    renderWithRouterAndProviders(<Footer />);

    expect(screen.getByTestId(footerTestId)).toBeInTheDocument();
  });
});
