export enum AuthTypes {
  LOAD_REQUEST = "@auth/LOAD_REQUEST",
  LOAD_SUCCESS = "@auth/LOAD_SUCCESS",
  LOAD_FAILURE = "@auth/LOAD_FAILURE",
}

export interface AuthState {
  readonly loading: boolean;
  readonly error: boolean;
  readonly isLogged: boolean;
}
