import React from 'react';
import {Navigate} from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../const';

type PrivateRouteProps = {
  authorizationStatus: string;
  children: React.JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): React.JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AuthorizationStatus.AUTH ?
      children :
      <Navigate to={AppRoutes.LOGIN}/>
  );
}

export default PrivateRoute;
