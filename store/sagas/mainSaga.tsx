import { AxiosResponse } from 'axios';
import { call, fork, put, takeEvery } from 'redux-saga/effects';
import * as actions from '../modules/mainPageReducer';
import * as API from '../../api/index';

function* getMainCard(action: { type: string; payload: string }) {
  const query = action.payload;
  try {
    const response: AxiosResponse = yield call(API.getMainPageCard, query);
    yield put(actions.getMainCardSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}
function* getMainCardOrder(action: { type: string; payload: string }) {
  const query = action.payload;
  try {
    const response: AxiosResponse = yield call(API.getMainPageCard, query);
    yield put(actions.getMainCardOrderSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}

function* getSearchCard(action: { type: string; payload: string }) {
  const query = action.payload;
  try {
    const response: AxiosResponse = yield call(API.getMainSearchCard, query);
    yield put(actions.getSearchCardSuccess(response.data));
  } catch (err) {
    console.log(err);
  }
}

function* watchGetMainPageCard() {
  yield takeEvery(actions.GET_MAIN_CARD, getMainCard);
  yield takeEvery(actions.GET_MAIN_CARD_ORDER, getMainCardOrder);
  yield takeEvery(actions.GET_SEARCH_CARD, getSearchCard);
}
export default function* watchSaga() {
  yield fork(watchGetMainPageCard);
}
