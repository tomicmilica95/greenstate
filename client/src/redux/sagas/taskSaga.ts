import { call, put, StrictEffect, takeEvery } from 'redux-saga/effects';

import { getTasks, createTask, updateTask } from '../../api/taskApi';
import { taskActions } from '../reducers/taskReducer';
import { PayloadAction } from '@reduxjs/toolkit';
import { TaskPayload } from '@/types';

// function* getOneTask(action: any): Generator<StrictEffect, void, any> {
//   try {
//     const response = yield call(getById, action.payload);
//     const data = response.data;

//     yield put(taskActions.getById(data));
//   } catch (e) {
//     yield put(taskActions.updateError(true));
//   }
// }

function* getAllTasks(): Generator<StrictEffect, void, any> {
  try {
    const response = yield call(getTasks);
    const data = response.data;

    yield put(taskActions.getAllTasksSuccess(data));
  } catch (e) {
    yield put(taskActions.getAllTasksError(true));
  }
}

function* create(action: PayloadAction<TaskPayload>): Generator<StrictEffect, void, any> {
  try {
    const response = yield call(createTask, action.payload);
    const data = response.data;

    yield put(taskActions.createSuccess(data));
  } catch (e) {
    yield put(taskActions.createError(true));
  }
}

function* update(action: PayloadAction<number>): Generator<StrictEffect, void, any> {
  try {
    const response = yield call(updateTask, action.payload);
    const data = response.data;

    yield put(taskActions.createSuccess(data));
  } catch (e) {
    yield put(taskActions.createError(true));
  }
}

function* taskSaga() {
  yield takeEvery(taskActions.create, create);
  yield takeEvery(taskActions.getAllTasks, getAllTasks);
  yield takeEvery(taskActions.update, update);
}

export default taskSaga;
