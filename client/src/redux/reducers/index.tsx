import { TaskState, UserState } from '@/types';
import { combineReducers } from 'redux';
import userSlice from './userReducer';
import taskSlice from './taskReducer';

export interface GlobalState {
  user: UserState;
  task: TaskState;
}

const rootReducer = combineReducers({
  user: userSlice,
  task: taskSlice
});

export default rootReducer;
