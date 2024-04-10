import { screen } from '@testing-library/react';
import { renderWithRouterAndProviders } from '@utils/mock-component';
import LoginPage from '.';

describe('Component: LoginPage', () => {
  const loginPageTestId = 'login-page';

  it('should render login-page', () => {
    renderWithRouterAndProviders(<LoginPage />);

    expect(screen.getByTestId(loginPageTestId)).toBeInTheDocument();
  });
});
