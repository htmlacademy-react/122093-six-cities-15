import { ReactNode } from 'react';
import { Location, Navigate, useLocation } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const';
import { useAppSelector } from '../hooks';

type TProtectedRouteProps = {
  children: ReactNode;
  unAuthorized?: boolean;
}

type LocationState = {
  from: {
    pathname: string;
  };
}

export default function ProtectedRoute({ unAuthorized, children }: TProtectedRouteProps) {
  const isAuthorized = useAppSelector((state) =>state.authorizationStatus === AuthorizationStatus.Auth);
  const location = useLocation() as Location<LocationState>;

  if (unAuthorized && isAuthorized) {
    const from = location.state?.from || { pathname: AppRoute.Root };
    return <Navigate to={from} />;
  }

  if (!unAuthorized && !isAuthorized) {
    return <Navigate to={AppRoute.Login} state={{ from: location }} />;
  }

  return children;
}
