import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, RequestStatus } from '../../const';
import { UserData } from '../../types/user-data';
import { checkAuthAction, loginAction, logoutAction } from '../thunks/auth';

type AuthState = {
  authorizationStatus: AuthorizationStatus;
  userData: UserData | null;
  status: RequestStatus;
}

const initialState: AuthState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  status: RequestStatus.Idle,
};

const processSuccess = (state: AuthState, action: PayloadAction<UserData>) => {
  state.userData = action.payload;
  state.authorizationStatus = AuthorizationStatus.Auth;
  state.status = RequestStatus.Success;
};

const processFailed = (state: AuthState) => {
  state.authorizationStatus = AuthorizationStatus.NoAuth;
  state.status = RequestStatus.Failed;
};

const processLoading = (state: AuthState) => {
  state.status = RequestStatus.Loading;
};

const authSlice = createSlice({
  extraReducers: (builder) =>
    builder
      .addCase(checkAuthAction.pending, processLoading)
      .addCase(checkAuthAction.fulfilled, processSuccess)
      .addCase(checkAuthAction.rejected, processFailed)
      .addCase(loginAction.pending, processLoading)
      .addCase(loginAction.fulfilled, processSuccess)
      .addCase(loginAction.rejected, processFailed)
      .addCase(logoutAction.fulfilled, (state) => {
        state.userData = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      }),
  initialState,
  name: 'auth',
  reducers: {},
  selectors: {
    userData: (state) => state.userData,
    authStatus: (state) => state.status,
    authorizationStatus: (state) => state.authorizationStatus
  }
});

const authActions = {...authSlice.actions, checkAuthAction, loginAction, logoutAction};
const authSelectors = authSlice.selectors;

export { authActions, authSlice, authSelectors };
