export interface AuthState {
  isLogin: boolean;
  user: any | null;
  loginLoader: boolean;
  signLoader: boolean;
  forgotLoading: boolean;
  resetPasswordLoading: boolean;
  profileLoading: boolean;
  requestRoleLoading: boolean;
  settingsLoading: boolean;
  usersList: Array<any>;
  forgotLoader: boolean;
  resetLoader: boolean;
}
