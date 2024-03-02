import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import userSaga from './sagas/userSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: userReducer,
  middleware: () => [sagaMiddleware]
});

sagaMiddleware.run(userSaga);
export default store;
