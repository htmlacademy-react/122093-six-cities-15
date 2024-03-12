import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import {BrowserRouter} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import offers from './mocks/offers';
import comments from './mocks/comments';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Provider store={store}>
          <App offers={offers} comments={comments} />
        </Provider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
