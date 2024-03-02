import { call, put, StrictEffect, takeEvery } from 'redux-saga/effects';

import { useNavigate } from 'react-router-dom';
import { getById } from '@/api';
import { taskActions } from '../reducers/taskReducer';
import { GET_ONE_TASK } from '../types/taskType';

function* getOneTask(action: any): Generator<StrictEffect, void, any> {
  const navigate = useNavigate();
  try {
    const response = yield call(getById, action.payload);
    const data = response.data;

    yield put(taskActions.getById(data));
    navigate('/task');
  } catch (e) {
    yield put(taskActions.updateError(true));
  }
}

function* taskSaga() {
  yield takeEvery(GET_ONE_TASK, getOneTask);
}

export default taskSaga;
