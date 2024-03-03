import { call, put, StrictEffect, takeEvery } from 'redux-saga/effects';

import { getTasks } from '../../api/taskApi';
import { taskActions } from '../reducers/taskReducer';

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
  console.log('Task saga started');
  try {
    const response = yield call(getTasks);
    const data = response.data;
    console.log(data, '11111111');
    yield put(taskActions.getAllTasksSuccess(data));
  } catch (e) {
    yield put(taskActions.updateError(true));
  }
}

function* taskSaga() {
  //   yield takeEvery(GET_ONE_TASK, getOneTask);
  yield takeEvery(taskActions.getAllTasks, getAllTasks);
}

export default taskSaga;
