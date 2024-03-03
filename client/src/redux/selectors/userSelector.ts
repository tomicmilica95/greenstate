import { UserState } from '@/types';
import { createSelector } from '@reduxjs/toolkit';
import { GlobalState } from '../reducers';
import { initialState } from '../reducers/userReducer';

const createSelectors = (selectState: typeof getState) => {
  const selectUser = createSelector(selectState, (state: UserState) => state.user);
  const selectLoading = createSelector(selectState, (state: UserState) => state.loading);
  const selectError = createSelector(selectState, (state: UserState) => state.error);

  return {
    selectUser,
    selectLoading,
    selectError
  };
};

const getState = (state: GlobalState): UserState => {
  return state.user ?? initialState;
};

export const selectors = createSelectors(getState);
