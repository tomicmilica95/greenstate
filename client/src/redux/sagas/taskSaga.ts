import { call, put, takeEvery, StrictEffect } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { Task, TaskPayload } from '@/types';
import { getTasks, createTask, updateTask, deleteTask } from '../../api/taskApi';
import { taskActions } from '../reducers/taskReducer';

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

function* update(action: PayloadAction<Task>): Generator<StrictEffect, void, any> {
  try {
    const response = yield call(updateTask, action.payload);
    const data = response.data;

    yield put(taskActions.updateSuccess(data));
    yield put(taskActions.getAllTasks());
  } catch (e) {
    yield put(taskActions.updateError(true));
  }
}

function* deleteOneTask(action: PayloadAction<string>): Generator<StrictEffect, void, any> {
  try {
    const response = yield call(deleteTask, action.payload);
    const data = response.data;

    yield put(taskActions.deleteSuccess(data));
  } catch (e) {
    yield put(taskActions.deleteError(true));
  }
}

function* taskSaga() {
  yield takeEvery(taskActions.create, create);
  yield takeEvery(taskActions.getAllTasks, getAllTasks);
  yield takeEvery(taskActions.update, update);
  yield takeEvery(taskActions.delete, deleteOneTask);
}

export default taskSaga;
