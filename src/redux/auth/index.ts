import { Reducer } from "redux";
import { AuthState, AuthTypes } from "./types";

const INITIAL_STATE: AuthState = {
  error: false,
  loading: false,
  isLogged: false,
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.LOAD_REQUEST: {
      return {
        ...state,
        loading: true,
        isLogged: false,
        error: false,
      };
    }
    case AuthTypes.LOAD_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        isLogged: true,
      };
    }
    case AuthTypes.LOAD_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
        isLogged: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
