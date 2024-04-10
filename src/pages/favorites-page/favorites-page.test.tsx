import { screen } from '@testing-library/react';
import { renderWithRouterAndProviders } from '@utils/mock-component';
import FavoritesPage from '.';
import { setupStore } from '@store/index';
import { makeFakeOffer } from '@utils/mocks';
import { fetchFavoritesAction } from '@store/thunks/favorite';

describe('Component: FavoritesPage', () => {
  const fakeOffer = makeFakeOffer();
  const favoritesPageTestId = 'favorites-page';

  it('should render favorites-page', () => {
    const store = setupStore();
    store.dispatch(fetchFavoritesAction.fulfilled([fakeOffer], '', undefined));
    renderWithRouterAndProviders(<FavoritesPage />, {store});

    expect(screen.getByTestId(favoritesPageTestId)).toBeInTheDocument();
  });
});
