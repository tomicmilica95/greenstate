import { createSelector } from '@reduxjs/toolkit';
import { GlobalState } from '../reducers';
import { TaskState } from 'types';
import { initialState, taskAdapter } from '../reducers/taskReducer';

const createSelectors = (selectState: { (state: GlobalState): TaskState }) => {
  const taskSelector = taskAdapter.getSelectors(selectState);
  const selectLoading = createSelector(selectState, (state: TaskState) => state.loading);
  const selectError = createSelector(selectState, (state) => state.error);

  return {
    ...taskSelector,
    selectLoading,
    selectError
  };
};

const getState = (state: GlobalState): TaskState => {
  return state.task ?? initialState;
};

export const selectors = createSelectors(getState);
