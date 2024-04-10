import { screen, waitFor } from '@testing-library/react';
import { AppRoute } from '@const';
import { renderWithRouterAndProviders } from '@utils/mock-component';
import { makeFakeUser } from '@utils/mocks';
import { setupStore } from './store';
import { checkAuthAction } from '@store/thunks/auth';
import App from './app';

describe('Application Routing', () => {
  it('should render "Main page" on "/"', async() => {
    const expectedTestId = 'main-page';
    renderWithRouterAndProviders(<App />, {route: AppRoute.Root});

    await waitFor(() => expect(screen.getByTestId(expectedTestId)).toBeInTheDocument());
  });

  it('should render "Login page" on "/login"', async() => {
    const expectedTestId = 'login-page';
    renderWithRouterAndProviders(<App />, {route: AppRoute.Login});

    await waitFor(() => expect(screen.getByTestId(expectedTestId)).toBeInTheDocument());
  });

  it('should render "Favorites-page" on "/favorites"', async() => {
    const fakeUser = makeFakeUser();
    const store = setupStore();
    store.dispatch(checkAuthAction.fulfilled(fakeUser, '', undefined));
    const expectedTestId = 'favorites-empty';
    renderWithRouterAndProviders(<App />, {route: AppRoute.Favorites, store});

    await waitFor(() => expect(screen.getByTestId(expectedTestId)).toBeInTheDocument());
  });
});
