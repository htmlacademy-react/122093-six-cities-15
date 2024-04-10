import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { AppStore, RootState, setupStore } from '@store/index';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

export function renderWithRouterAndProviders(
  ui: React.ReactElement,
  {
    route = '/',
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions & { route?: string } = {}
) {
  window.history.pushState({}, 'Test page', route);

  const Wrapper = ({ children }: PropsWithChildren) => (
    <HelmetProvider>
      <BrowserRouter>
        <Provider store={store}>
          {children}
        </Provider>
      </BrowserRouter>
    </HelmetProvider>
  );

  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions })
  };
}
