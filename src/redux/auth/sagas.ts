import { Keyboard } from "react-native";
import { call, put, delay } from "redux-saga/effects";
import api from "~/services/api";

import { loadFailure, loadSucess } from "./actions";

export function* handleAuth({ payload }) {
  try {
    yield call(api.post, "/login", {
      username: payload.email,
      password: payload.password,
    });

    yield delay(600);

    yield put(loadSucess());
  } catch (err) {
    yield delay(600);
    yield put(loadFailure());
  } finally {
    Keyboard.dismiss();
  }
}
