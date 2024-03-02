import { TaskState, UserState } from '@/types';
import { combineReducers } from 'redux';
import userSlice from './userReducer';
import taskReducer from './taskReducer';

export interface GlobalState {
  user: UserState;
  task: TaskState;
}

const reducer = combineReducers({
  user: userSlice,
  task: taskReducer
});

export default reducer;
