import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import {BrowserRouter} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import offers from './mocks/offers';
import { Provider } from 'react-redux';
import { store } from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import { checkAuthAction } from './store/thunks/auth';
import { fetchOffersAction } from './store/thunks/offers';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Provider store={store}>
          <ToastContainer />
          <App offers={offers} />
        </Provider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
