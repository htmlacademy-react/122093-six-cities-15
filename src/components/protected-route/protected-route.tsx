import Loader from '@components/loader';
import { AppRoute, RequestStatus } from '@const';
import { useAppSelector } from '@hooks/index';
import useAuth from '@hooks/use-auth';
import { getToken } from '@services/token';
import { authSelectors } from '@store/slices/auth';
import { ReactNode } from 'react';
import { Location, Navigate, useLocation } from 'react-router-dom';

type TProtectedRouteProps = {
  children: ReactNode;
  unAuthorized?: boolean;
}

type LocationState = {
  from: {
    pathname: string;
  };
}

function ProtectedRoute({ unAuthorized, children }: TProtectedRouteProps) {
  const isAuthorized = useAuth();
  const authStatus = useAppSelector(authSelectors.authStatus);
  const location = useLocation() as Location<LocationState>;
  const token = getToken();

  if (token && authStatus === RequestStatus.Loading) {
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

export default ProtectedRoute;
