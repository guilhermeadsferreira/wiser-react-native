import { all, takeLatest } from "redux-saga/effects";
import { AuthTypes } from "~/redux/auth/types";
import { handleAuth } from "~/redux/auth/sagas";

export default function* rootSaga() {
  return yield all([takeLatest(AuthTypes.LOAD_REQUEST, handleAuth)]);
}
