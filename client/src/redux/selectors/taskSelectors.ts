import { createSelector, type EntityState } from '@reduxjs/toolkit';

import { type TaskState } from 'types';
import { initialState, taskAdapter } from '../reducers/taskReducer';
import { type GlobalState } from '../reducers';

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
