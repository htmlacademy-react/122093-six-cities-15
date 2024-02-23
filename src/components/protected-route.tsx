import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

type TProtectedRouteProps = {
  hasAccess: boolean;
  children: ReactNode;
}

export default function ProtectedRoute({ hasAccess, children }: TProtectedRouteProps) {
  return hasAccess ? children : <Navigate to="/login" />;
}
