import { useAppSelector } from '.';
import { AuthorizationStatus } from '../const';
import { authSelectors } from '../store/slices/auth';

export default function useAuth () {
  const status = useAppSelector(authSelectors.authorizationStatus);
  return status === AuthorizationStatus.Auth;
}
