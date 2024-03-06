import { AuthorizationStatus } from './const';

function getRatingWidth(rating: number) {
  return `${rating * 20}%`;
}

function setAuthorizationStatus(status: AuthorizationStatus): boolean {
  return status === AuthorizationStatus.Auth;
}

const isAuthorized = setAuthorizationStatus(AuthorizationStatus.Auth);

export {getRatingWidth, isAuthorized};
