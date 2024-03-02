import { call, put, StrictEffect, takeEvery } from 'redux-saga/effects';

import { SIGN_UP_USER, LOG_IN_USER } from '../types/userType';
import { login, signup } from '../../api/userApi';
import { userActions } from '../reducers/userReducer';

function* signupUser(action: any): Generator<StrictEffect, void, any> {
  try {
    const response = yield call(signup, action.payload);
    const data = response.data;

    localStorage.setItem('token', JSON.stringify(data.token));

    yield put(userActions.signupSuccess(data.user));
  } catch (e) {
    yield put(userActions.signupError(true));
  }
}

function* loginUser(action: any): Generator<StrictEffect, void, any> {
  try {
    const response = yield call(login, action.payload);
    const data = response.data;

    localStorage.setItem('token', JSON.stringify(data.token));

    yield put(userActions.loginSuccess(data.user));
  } catch (e) {
    yield put(userActions.loginError(true));
  }
}

function* userSaga() {
  yield takeEvery(SIGN_UP_USER, signupUser);
  yield takeEvery(LOG_IN_USER, loginUser);
}

export default userSaga;
