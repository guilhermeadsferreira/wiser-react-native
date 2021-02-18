import { AuthTypes } from "./types";

export const loadSucess = () => ({
  type: AuthTypes.LOAD_SUCCESS,
});

export const loadFailure = () => ({
  type: AuthTypes.LOAD_FAILURE,
});

export const loadRequest = ({ email, password }) => ({
  type: AuthTypes.LOAD_REQUEST,
  payload: {
    email,
    password,
  },
});
