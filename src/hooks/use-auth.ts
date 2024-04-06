import { useAppSelector } from '.';
import { AuthorizationStatus } from '../const';
import { authSelectors } from '../store/slices/auth';

function useAuth () {
  const status = useAppSelector(authSelectors.authorizationStatus);
  return status === AuthorizationStatus.Auth;
}

export default useAuth;
