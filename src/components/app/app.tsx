import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import Page404 from '../../pages/page-404/page-404';

import PrivateRoute from '../private-route/private-route';

import { AppRoutes, AuthorizationStatus } from '../../const';
import { TOffers } from '../../types/offer';

type AppScreenProps = {
  offers: TOffers;
};

function App({offers}: AppScreenProps): React.JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.ROOT}>
            <Route index element={
              <MainPage
                offers={offers}
              />
            }
            />
            <Route path={AppRoutes.LOGIN} element={<LoginPage/>}/>
            <Route path={`${AppRoutes.OFFER}/:offerId`} element={
              <OfferPage
                offers={offers}
              />
            }
            />
            <Route
              path={AppRoutes.FAVORITES}
              element={
                <PrivateRoute authorizationStatus={AuthorizationStatus.AUTH}>
                  <FavoritesPage
                    offers={offers}
                  />
                </PrivateRoute>
              }
            />
            <Route path='*' element={<Page404/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
