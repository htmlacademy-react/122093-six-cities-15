import { ReactNode } from 'react';
import { Location, Navigate, useLocation } from 'react-router-dom';
import { AppRoute } from '../const';
import { isAuthorized } from '../utils';

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
