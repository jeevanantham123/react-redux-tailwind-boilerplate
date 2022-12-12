import { put, takeEvery } from "redux-saga/effects";
import { ACTIONS } from "../sagaActions";
import { decrement, increment } from "./slice";

function* incCounter() {
  yield put(increment());
}

function* decCounter() {
  yield put(decrement());
}

export function* CounterSaga() {
  yield takeEvery(ACTIONS.INCREMENT, incCounter);
  yield takeEvery(ACTIONS.DECREMENT, decCounter);
}

export function* helloSaga() {
  console.log("Hello Sagas!");
}
