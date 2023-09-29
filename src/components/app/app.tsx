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

type AppScreenProps = {
  amountPlaces: number;
};

function App({amountPlaces}: AppScreenProps): React.JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.ROOT}>
            <Route index element={<MainPage amountPlaces={amountPlaces}/>}/>
            <Route path={AppRoutes.LOGIN} element={<LoginPage/>}/>
            <Route path={AppRoutes.OFFER} element={<OfferPage/>}/>
            <Route
              path={AppRoutes.FAVORITES}
              element={
                <PrivateRoute authorizationStatus={AuthorizationStatus.NO_AUTH}>
                  <FavoritesPage/>
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
