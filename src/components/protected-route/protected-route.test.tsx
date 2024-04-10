import { screen, waitFor } from '@testing-library/react';
import { AppRoute } from '@const';
import { renderWithRouterAndProviders } from '@utils/mock-component';
import App from '../../app';

describe('Component: ProtectedRoute', () => {
  it('should redirect to login page, when user not authorized', async() => {
    const notExpectedTestId = 'favorites-empty';
    const expectedTestId = 'login-page';
    renderWithRouterAndProviders(<App />, {route: AppRoute.Favorites});

    await waitFor(() => expect(screen.queryByTestId(notExpectedTestId)).not.toBeInTheDocument());
    await waitFor(() => expect(screen.getByTestId(expectedTestId)).toBeInTheDocument());
  });
});
