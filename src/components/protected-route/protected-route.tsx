import { ReactNode } from 'react';
import { Location, Navigate, useLocation } from 'react-router-dom';
import { AppRoute, RequestStatus } from '../../const';
import useAuth from '../../hooks/use-auth';
import { useAppSelector } from '../../hooks';
import { authSelectors } from '../../store/slices/auth';
import Loader from '../loader/loader';

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
  const isAuthorized = useAuth();
  const status = useAppSelector(authSelectors.authStatus);
  const location = useLocation() as Location<LocationState>;

  if (status === RequestStatus.Loading) {
    return <Loader />;
  }

  if (unAuthorized && isAuthorized) {
    const from = location.state?.from || { pathname: AppRoute.Root };
    return <Navigate to={from} />;
  }

  if (!unAuthorized && !isAuthorized) {
    return <Navigate to={AppRoute.Login} state={{ from: location }} />;
  }

  return children;
}
