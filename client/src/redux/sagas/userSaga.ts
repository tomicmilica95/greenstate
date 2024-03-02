import { call, put, StrictEffect, takeEvery } from 'redux-saga/effects';

import { AUTH_USER } from '../types/userType';
import { signup } from '../../api/userApi';
import { userActions } from '../reducers/userReducer';
import { useNavigate } from 'react-router-dom';

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

function* userSaga() {
  yield takeEvery(AUTH_USER, signupUser);
}

export default userSaga;
